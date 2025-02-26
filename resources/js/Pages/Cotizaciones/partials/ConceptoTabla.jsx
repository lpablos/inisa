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
import BusquedaCotizacion from "./BusquedaCotizacion";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import BusquedaAvanzadaCotizacion from "./BusquedaAvanzadaCotizacion";
import { useLocalStorage } from "primereact/hooks";
import ExcelPersonalizador from "./ExcelPersonalizador";
        




const ConceptoTabla = () => {
    const [seleccionCotizacion, setSeleccionCotizacion] = useState(null)    
    const [codigosShow, setCodigosShow] = useState(false)
    const [cotizaciones, setCotizaciones] = useState([]); // Lista de cotizaciones
    const [selectedCotizacion, setSelectedCotizacion] = useState(null); // Cotización seleccionada
    const [isDialogVisible, setIsDialogVisible] = useState(false); // Visibilidad del modal
    const [isEdit, setIsEdit] = useState(false); // Modo edición o creación
    const [loader, setLoader] = useState(false); // Control de loader
    const toast = useRef(null); // Referencia de Toast
    const [vistraPreviaPDF, setVistraPreviaPDF] = useState(false)
    const [identyPDFDetalle, setIdentyPDFDetalle] = useState(null);
    const [buscadorEstatus, setBuscadorEstatus] = useState(null)
    const [vistaPreviaExcel, setVistaPreviaExcel] = useState(false);
    const [identyExcelDetalle, setIdentyExcelDetalle] = useState(null);


    // Cargar cotizaciones
    const resultadosBusquedaCotizaciones = (data) =>{
        const {cotizaciones} = data
        setCotizaciones([]);
        setLoader(true);
        setTimeout(() => {
            if(cotizaciones.length > 0){
                toast.current.show({
                    severity: "success",
                    summary: "Cotizaciones",
                    detail: "Se encontraron registros",
                    life: 3000,
                });
            }else{
                toast.current.show({
                    severity: "info",
                    summary: "Cotizaciones",
                    detail: "No se encontraron suficientes registros.. Intenta con otros valores",
                    life: 3000,
                });
            }
            setCotizaciones(cotizaciones)
            setLoader(false);
        }, 2000);
    }

    const obtenerCotizaciones = async () => {
        
        setCotizaciones([]);
        setLoader(true);
        try {     
            // const response = await axios.get(route("catalogos.detalle.cliente.asc"), { estatus: buscadorEstatus });  
            const response = await axios.get(route("cotizacion.list.cotizaciones"), { 
                params: { estatus: buscadorEstatus } 
              });
            
               
            const {cotizaciones} = response.data
            if(cotizaciones.length > 0 ){
                setCotizaciones(cotizaciones);
            }
            setLoader(false);
            // console.log("cotizaciones", response.data.cotizaciones);
        } catch (error) {
            console.error("Error al obtener cotizaciones:", error);
            setCotizaciones([]);
            setLoader(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            obtenerCotizaciones(); // Cargar datos al montar el componente
        }, 1000);
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
        return (
            <div className="flex justify-content-center">
                <span className="p-overlay-badge" data-pr-tooltip={rowData.estatus.descripcion} id={`tooltip-${rowData.id}`}>
                    <Badge value={rowData.estatus.abreviacion} />
                </span>
                <Tooltip target={`#tooltip-${rowData.id}`} />
            </div>
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

    const renderFecha = (rowData) => {
        const fechaObj = new Date(rowData.fecha);
        const fechaFormateada = `${fechaObj.getDate()}-${fechaObj.getMonth() + 1}-${fechaObj.getFullYear()}`;
        return (
            <>{fechaFormateada}</>
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

    // const handleExportClick = (id) => {
        
        // const url = `${route("exportar.excel.cotizacion", { id: 1 })}`;
        // // console.log("Este es la ruta", url);
        // setTimeout(() => {

        //     Inertia.visit(url, { method: 'get' }); // Realiza la navegación.
        // }, 1000);
        //const url = route('exportar.excel.cotizacion', id); // Genera la URL dinámica.
    // };

    const mostrarExcelDetalle = (id) =>{
        setIdentyExcelDetalle(id)
        setTimeout(() => {
            setVistaPreviaExcel(true)
        }, 500);
    }

    const mostrarPDFDetalle = (id) =>{
        setIdentyPDFDetalle(id)
        setTimeout(() => {
            setVistraPreviaPDF(true)
        }, 500);
    }

    
    // Plantilla para las acciones
    const accionesTemplate = (rowData) => (
        <div className="flex gap-2">
            <a
                id="capture-link"
                href={route("cotizacion.captura.detalle", { identy: rowData.id })}
                size="small"
                rel="noopener noreferrer"
                className="p-button-rounded p-button"
            >
                <i className="pi pi-pencil"></i>
            </a>
            <Button
                size="small"
                icon="pi pi-folder-open"
                tooltip="Detalle"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => handleEditar(rowData)}
            />
            <Button
                severity="success"
                size="small"
                icon="pi pi-file-excel"
                tooltip="Vista Previa Excel"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => mostrarExcelDetalle(rowData.id) }
            />
            <Button
                severity="success"
                size="small"
                icon="pi pi-file-pdf"
                tooltip="Vista Previa PDF"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => mostrarPDFDetalle(rowData.id)}
            />
             <Button 
                size="small" 
                className="p-button-rounded p-button-secondary p-button-sm"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                tooltip="Agregar Codigo"
                icon="pi pi-qrcode"  
                onClick={() => { setCodigosShow(true); setSeleccionCotizacion(rowData.id);}} 
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
            <Tooltip target="#capture-link" content="Captura la cotizacion" position="bottom" />
        </div>
    );

    // const codigosAsc = (rowData) => (
    //     <div className="flex flex-wrap justify-content-center gap-1">
    //         {Array.isArray(rowData.codigos) ? (
    //             rowData.codigos.map((row, index) => (
    //                 <Tag
    //                     key={row.id ?? index}
    //                     severity="info"
    //                     value={`${row.codigo? `Cód.: ${row.codigo}`:''}  ${row.fecha ? `- Fecha: ${row.fecha}` : ''}`}
    //                     rounded
    //                     style={{ width: '250px', textAlign: 'center' }}
    //                 />
    //             ))
    //         ) : (
    //             <p>No hay datos disponibles</p>
    //         )}
              
    //     </div>
    // );
    
    // Cerrar el diálogo
    const handleCerrarDialogo = () => {
        setIsDialogVisible(false);
        setSelectedCotizacion(null);
    };

    const reloadHideCodigos = (validacion) =>{
        obtenerCotizaciones();
        setCodigosShow(validacion)
    }

    const ActivarBusqueda = (dato) =>{
        setLoader(true);
        const {id} =dato
        setBuscadorEstatus(id)
        setTimeout(() => {
            obtenerCotizaciones()
        }, 1000);
    }

    return (
        <div className="card">
         
          
            <div className="flex justify-end items-center gap-x-4 flex-wrap mb-7">
                <BusquedaCotizacion className="mr-2" activarBusqueda={ActivarBusqueda}/>
                <Button 
                    icon="pi pi-plus" 
                    tooltip="Nueva Cotización" 
                    tooltipOptions={{ showDelay: 100, hideDelay: 300 }} 
                    rounded 
                    severity="info" 
                    className="ml-2"
                    aria-label="Nueva Cotización" 
                    onClick={handleCrear} 
                />
                <BusquedaAvanzadaCotizacion resultadosBusqueda={resultadosBusquedaCotizaciones}/>

            </div>

            {loader && (
                <div className="card flex justify-content-center">
                    <ProgressSpinner />
                </div>
            )}
            {loader === false && (
                <>
                    {cotizaciones.length > 0 && (
                        <DataTable
                            value={cotizaciones}
                            paginator
                            rows={40}
                            size={'small'}
                        >
                            <Column field="id" header="ID" headerStyle={{ textAlign: 'center' }}  />
                            <Column field="folio" header="Cotización Folio" headerStyle={{ textAlign: 'center', fontWeight: 'bold' }} />
                            <Column field="titulo" header="Título" headerStyle={{ textAlign: 'center' }} />
                            <Column field="fecha" header="Fecha"  style={{ width: '9em' }} body={(rowData) => renderFecha(rowData)}/>
                            <Column header="Plantilla"  style={{ width: '9em' }}  body={(rowData) => renderTipo(rowData)}/>
                            {/* <Column field="valides" header="Válido Intervalo" style={{ width: '9em' }} body={(rowData) => renderValides(rowData)}/> */}
                            <Column field="estatus.nombre" header="Status" body={(rowData) => renderStatus(rowData)}/>
                            <Column header="Acciones" body={accionesTemplate} />
                        </DataTable>
                    )}

                    {cotizaciones.length === 0 && (
                        <div className="card flex justify-content-center">
                            <Message text="No se encontraron suficientes registros" />
                        </div>
                    )}
                </>
            )}
            
            <Toast ref={toast} />
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
            <CodigosDialog seleccionCotizacion={seleccionCotizacion} codigosShow={codigosShow} setCodigosShow={reloadHideCodigos}/>
            <VistaPreviaCotizacion  identyCotizacion={identyPDFDetalle} vistraPreviaPDF={vistraPreviaPDF} setVistraPreviaPDF={setVistraPreviaPDF}/>
            <ExcelPersonalizador  identyCotizacion={identyExcelDetalle} vistaPreviaExcel={vistaPreviaExcel} setVistaPreviaExcel={setVistaPreviaExcel}/>
        </div>
    );
};

export default ConceptoTabla;
