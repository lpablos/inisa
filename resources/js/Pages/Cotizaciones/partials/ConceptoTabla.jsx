import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dialogo from "./Dialogo"; // Componente para el modal
import ConfirmarEliminacion from "./ConfirmarEliminacion";
import axios from "axios";

const ConceptoTabla = () => {
    const [cotizaciones, setCotizaciones] = useState([]); // Lista de cotizaciones
    const [selectedCotizacion, setSelectedCotizacion] = useState(null); // Cotización seleccionada
    const [isDialogVisible, setIsDialogVisible] = useState(false); // Visibilidad del modal
    const [isEdit, setIsEdit] = useState(false); // Modo edición o creación
    const [loader, setLoader] = useState(false); // Control de loader
    const toast = useRef(null); // Referencia de Toast

    // Cargar cotizaciones
    const obtenerCotizaciones = async () => {
        try {
            const response = await axios.get(
                route("cotizacion.list.cotizaciones")
            );
            setCotizaciones(response.data.cotizaciones || []);
            console.log("cotizaciones", response.data.cotizaciones);
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

    // Plantilla para las acciones
    const accionesTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button
                icon="pi pi-pencil"
                label="Editar"
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => handleEditar(rowData)}
            />
            <Button
                icon="pi pi-trash"
                label="Eliminar"
                className="p-button-danger p-button-sm"
                onClick={() =>
                    confirmarEliminacionCotizacion(rowData.id, rowData.titulo)
                }
            />

            <Button
                icon="pi pi-eye"
                label="Ver Detalle"
                className="p-button-success p-button-sm"

            />
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
                <Button
                    label="Nueva Cotización"
                    icon="pi pi-plus"
                    className="p-button-success"
                    onClick={handleCrear}
                />
            </div>

            {/* Tabla de cotizaciones */}
            <DataTable
                value={cotizaciones}
                paginator
                rows={5}
                responsiveLayout="scroll"
            >
                <Column field="id" header="ID" />
                <Column field="titulo" header="Título" />
                <Column field="proveedor.nombre" header="Proveedor" />
                <Column field="fecha" header="Fecha" />
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
        </div>
    );
};

export default ConceptoTabla;
