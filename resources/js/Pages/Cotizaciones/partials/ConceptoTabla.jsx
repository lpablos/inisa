import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import axios from "axios";

const ConceptoTabla = () => {
    const [cotizaciones, setCotizaciones] = useState([]);

    // Función para cargar los datos de cotizaciones
    const obtenerCotizaciones = async () => {
        try {
            const response = await axios.get(route("cotizacion.list.cotizaciones"));
            const { data } = response;
            if (Array.isArray(data.cotizaciones)) {
                setCotizaciones(data.cotizaciones);
            } else {
                console.error("La respuesta no es un array:", data.cotizaciones);
                setCotizaciones([]);
            }
        } catch (error) {
            console.error("Error al obtener las cotizaciones:", error);
            setCotizaciones([]);
        }
    };

    useEffect(() => {
        obtenerCotizaciones();
    }, []);

    // Funciones para Editar y Eliminar
    const handleEditar = (rowData) => {
        console.log("Editar:", rowData);
        // Aquí puedes abrir un formulario de edición con los datos de `rowData`
    };

    const handleEliminar = (rowData) => {
        console.log("Eliminar:", rowData);
        if (window.confirm(`¿Estás seguro de eliminar la cotización "${rowData.titulo}"?`)) {
            axios
                .delete(route("catalogo.delete.cotizacion", { id: rowData.id }))
                .then(() => {
                    obtenerCotizaciones(); // Refresca la tabla después de eliminar
                })
                .catch((error) => {
                    console.error("Error al eliminar:", error);
                });
        }
    };



    // Plantilla de Acciones
    const accionesTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-info p-button-sm"
                    onClick={() => handleEditar(rowData)}
                    tooltip="Editar"
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-sm"
                    onClick={() => handleEliminar(rowData)}
                    tooltip="Eliminar"
                />
            </div>
        );
    };

    return (
        <div className="card">

            <DataTable value={cotizaciones} paginator rows={5} responsiveLayout="scroll">
                <Column field="id" header="ID" />
                <Column field="titulo" header="Título" />
                <Column field="proveedor" header="Proveedor" />
                <Column field="fecha" header="Fecha" />
                <Column header="Acciones" body={accionesTemplate} />
            </DataTable>
        </div>
    );
};

export default ConceptoTabla;
