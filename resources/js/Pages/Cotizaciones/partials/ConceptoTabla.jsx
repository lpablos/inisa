import React, { useState, useEffect, useRef } from "react";
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dialogo from "./Dialogo"; // Componente para el modal
import ConfirmarEliminacion from "./ConfirmarEliminacion";
import ConfirmarDuplicacion from "./ConfirmarDuplicacion";
import axios from "axios";
import { Tooltip } from 'primereact/tooltip';
import "../../../../css/style_cotizacion.css";
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import VistaPreviaCotizacion from "./VistaPreviaCotizacion";
import { Tag } from 'primereact/tag';
import CodigosDialog from "./CodigosDialog";




const ConceptoTabla = () => {
    const [cotizaciones, setCotizaciones] = useState([]); // Lista de cotizaciones
    const [selectedCotizacion, setSelectedCotizacion] = useState(null); // Cotización seleccionada
    const [isDialogVisible, setIsDialogVisible] = useState(false); // Visibilidad del modal
    const [isEdit, setIsEdit] = useState(false); // Modo edición o creación
    const [loader, setLoader] = useState(false); // Control de loader
    const toast = useRef(null); // Referencia de Toast


    const [vistraPreviaPDF, setVistraPreviaPDF] = useState(false)

    // Cargar cotizaciones
    const obtenerCotizaciones = async () => {
        try {
            const response = await axios.get(
                route("cotizacion.list.cotizaciones")
            );
            setCotizaciones(response.data.cotizaciones || []);
            // console.log("cotizaciones", response.data.cotizaciones);
        } catch (error) {
            console.error("Error al obtener cotizaciones:", error);
            setCotizaciones([]);
        }
    };

    useEffect(() => {
        obtenerCotizaciones(); // Cargar datos al montar el componente
    }, []);

    // Crear una nueva cotización
    const handleCrear = () => {
        setSelectedCotizacion(null); // Limpia los datos seleccionados
        setIsEdit(false); // Cambia a modo creación
        setIsDialogVisible(true); // Abre el modal
    };

    // Editar una cotización
    const handleEditar = (rowData) => {
        setSelectedCotizacion(rowData); // Establece la cotización seleccionada
        setIsEdit(true); // Cambia a modo edición
        setIsDialogVisible(true); // Abre el modal

        console.log(rowData);
    };

    const renderStatus = (rowData) => {
        let statusClass = "";

        switch (rowData.estatus.nombre.toLowerCase()) {
            case "activo":
                statusClass = "status-active";
                break;
            case "inactivo":
                statusClass = "status-inactive";
                break;
            case "pendiente":
                statusClass = "status-pending";
                break;
            default:
                statusClass = "status-default";
        }

        return (
            <span className={`status-label ${statusClass}`}>
                {rowData.estatus.nombre}
            </span>
        );
    };

    const renderValides = (rowData) => {
        return (
            <div style={{ display: 'flex', gap: '18px', width: '45 rem' }}>
                <Chip label={rowData.fecha_cotiza_inicio+' '+rowData.fecha_cotiza_fin} />
            </div>
        );
    };

    const renderTipo = (rowData) => {
        return (
            <div style={{ display: 'flex', gap: '18px', width: '45 rem' }}>
                {rowData.es_material == 1 && (
                    "Material"
                )}
                {rowData.es_mano_obra == 1 && (
                    "Material Con Mano de Obra"
                )}
            </div>
        );
    };


    // Eliminar una cotización
    const eliminarCotizacion = async (id) => {
        setLoader(true);
        try {
            await axios.delete(route("cotizacion.delete.cotizacion", { id }));
            toast.current.show({
                severity: "success",
                summary: "Cotización eliminada",
                detail: "La cotización ha sido eliminada exitosamente.",
                life: 3000,
            });
            obtenerCotizaciones(); // Refresca la tabla
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar la cotización.",
                life: 3000,
            });
            console.error("Error al eliminar cotización:", error);
        } finally {
            setLoader(false);
        }
    };

    // Confirmar eliminación
    const confirmarEliminacionCotizacion = (id, titulo) => {
        toast.current.show({
            severity: "warn",
            summary: "Confirmación",
            sticky: true,
            content: (
                <ConfirmarEliminacion
                    mensaje={`¿Estás seguro de eliminar la cotización "${titulo}"?`}
                    onConfirm={() => {
                        eliminarCotizacion(id);
                        toast.current.clear();
                    }}
                    onCancel={() => toast.current.clear()}
                />
            ),
        });
    };


    const confirmarDuplicacionCotizacion = (id, titulo) => {
        toast.current.show({
            severity: "warn",
            summary: "Confirmación",
            sticky: true,
            content: (
                <ConfirmarDuplicacion
                    mensaje={`¿Estás seguro de duplicar la cotización "${titulo}"?`}
                    onConfirm={() => {
                        deplicarCotizacion(id);
                        toast.current.clear();
                    }}
                    onCancel={() => toast.current.clear()}
                />
            ),
        });
    };

    const deplicarCotizacion = async (id) => {
        setLoader(true);
        try {
            await axios.post(route("cotizacion.duplicar.cotizacion", { id }));
            toast.current.show({
                severity: "success",
                summary: "Cotización duplicada",
                detail: "La cotización ha sido duplicada exitosamente.",
                life: 3000,
            });
            obtenerCotizaciones(); // Refresca la tabla
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo duplicar la cotización.",
                life: 3000,
            });
            console.error("Error al duplicar la  cotización:", error);
        } finally {
            setLoader(false);
        }
    };

    const handleExportClick = (id) => {   
        const url = route('exportar.excel.cotizacion', id); // Genera la URL dinámica.
        Inertia.visit(url, { method: 'get' }); // Realiza la navegación.
    };

    // Plantilla para las acciones
    const accionesTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button
                severity="success"
                size="small"
                icon="pi pi-file-excel"
                tooltip="Vista Previa Excel"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => handleExportClick(rowData.id) }
            />
            <Button
                severity="success"
                size="small"
                icon="pi pi-file-pdf"
                tooltip="Vista Previa PDF"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => setVistraPreviaPDF(true)}
            />
            <Button
                size="small"
                icon="pi pi-folder-open"
                tooltip="Detalle"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => handleEditar(rowData)}
            />
            <Button
                size="small"
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger p-button-sm"
                tooltip="Eliminar"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                onClick={() =>
                    confirmarEliminacionCotizacion(rowData.id, rowData.titulo)
                }
            />
            <Button
                size="small"
                icon="pi pi-copy"
                className="p-button-rounded p-button-warning p-button-sm"
                tooltip="Duplicar"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                onClick={() =>
                    confirmarDuplicacionCotizacion(rowData.id, rowData.titulo)
                }
            />
             <a
                id="capture-link"
                href={route("cotizacion.captura.detalle", { identy: rowData.id })}
                size="small"
                rel="noopener noreferrer"
                className="p-button-rounded p-button"
            >
                <i className="pi pi-pencil"></i>
            </a>
            <Tooltip target="#capture-link" content="Captura la cotizacion" position="bottom" />
        </div>
    );

    const codigosAsc = (rowData) => (
        
        <div className=" flex flex-wrap justify-content-center gap-1">               
            <Tag icon="pi pi-flag" severity="secondary" value="PO: 4575219650 Fecha: 2025-01-26" rounded style={{ width: '250px', textAlign: 'center' }}></Tag>
            {/* <Tag icon="pi pi-flag" severity="contrast" value="PO: 4575219650 Fecha: 2025-01-26" rounded style={{ width: '250px', textAlign: 'center' }}></Tag>
            <Tag icon="pi pi-flag" severity="secondary" value="PO: 4575219650 Fecha: 2025-01-26" rounded style={{ width: '250px', textAlign: 'center' }}></Tag>
            <Tag icon="pi pi-flag" severity="contrast" value="PO: 4575219650 Fecha: 2025-01-26" rounded style={{ width: '250px', textAlign: 'center' }}></Tag> */}
            <CodigosDialog/>
            
        </div>
            
        
    );

    // Cerrar el diálogo
    const handleCerrarDialogo = () => {
        setIsDialogVisible(false);
        setSelectedCotizacion(null);
    };

    return (
        <div className="card">
            {/* Toast para notificaciones */}
            <Toast ref={toast} />

            {/* Botón para crear cotización */}
            <div className="mb-3">
                {/* <Button
                    label="Nueva Cotización"
                    icon="pi pi-plus"
                    className="p-button-success"
                    onClick={handleCrear}
                /> */}
                <Button icon="pi pi-plus" tooltip="Nueva Cotización" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded severity="info" aria-label="Nueva Cotización" onClick={handleCrear}/>

            </div>

            {/* Tabla de cotizaciones */}
            <DataTable
                value={cotizaciones}
                paginator
                rows={5}
                size={'small'}
                responsiveLayout="scroll"
            >
                <Column field="id" header="ID" headerStyle={{ textAlign: 'center' }}  />
                <Column field="titulo" header="Título" headerStyle={{ textAlign: 'center' }} />
                <Column field="codigos" header="Codigos" body={(rowData) => codigosAsc(rowData)}/>
                <Column field="fecha" header="Fecha"  style={{ width: '9em' }}/>
                <Column header="Plantilla"  style={{ width: '9em' }}  body={(rowData) => renderTipo(rowData)}/>
                <Column field="valides" header="Válido Intervalo" style={{ width: '9em' }} body={(rowData) => renderValides(rowData)}/>
                <Column field="estatus.nombre" header="Status" body={(rowData) => renderStatus(rowData)}/>
                <Column header="Acciones" body={accionesTemplate} />
            </DataTable>

            {/* Modal para crear/editar */}
            {isDialogVisible && (
                <Dialogo
                    isEdit={isEdit}
                    dataToEdit={selectedCotizacion}
                    onSave={() => {
                        handleCerrarDialogo();
                        obtenerCotizaciones();
                    }}
                    onUpdate={() => {
                        handleCerrarDialogo();
                        obtenerCotizaciones();
                    }}
                    onClose={handleCerrarDialogo}
                />
            )}

            <VistaPreviaCotizacion vistraPreviaPDF={vistraPreviaPDF} setVistraPreviaPDF={setVistraPreviaPDF}/>
        </div>
    );
};

export default ConceptoTabla;
