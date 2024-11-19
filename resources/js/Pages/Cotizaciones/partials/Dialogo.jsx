import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import DropdownFilter from "./SelectorFilter";
import { Toast } from "primereact/toast";
import axios from "axios";

const Dialogo = () => {
    const [visible, setVisible] = useState(false); // Controla la visibilidad del diálogo
    const [selectedProveedor, setSelectedProveedor] = useState(null); // Proveedor seleccionado
    const [titulo, setTitulo] = useState(""); // Título de la cotización
    const [proveedores, setProveedores] = useState([]); // Lista de proveedores
    const [date, setDate] = useState(null); // Fecha de la cotización
    const toast = useRef(null); // Referencia para mostrar mensajes con Toast

    // Carga los proveedores al cargar el componente
    useEffect(() => {
        obtenerProveedores();
    }, []);

    // Obtiene la lista de proveedores desde el backend
    const obtenerProveedores = async () => {
        try {
            const response = await axios.get(route("catalogo.list.provedores"));
            const { data } = response;
            setProveedores(data); // Guarda los proveedores en el estado
        } catch (error) {
            // Muestra un error si no se pudieron obtener los proveedores
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de proveedores.",
                life: 3000,
            });
        }
    };

    // Plantilla para mostrar el proveedor seleccionado
    const selectedProveedorTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>
                        <strong>{option.nombre}</strong> ({option.abreviacion})
                    </div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    // Plantilla para mostrar cada opción de proveedor
    const proveedorOptionTemplate = (option) => (
        <div className="flex align-items-center">
            <div>
                <strong>{option.nombre}</strong> ({option.abreviacion})
            </div>
        </div>
    );

    // Función para guardar la cotización
    const handleGuardar = async () => {
        // Validación previa en el frontend
        if (!selectedProveedor || !titulo || !date) {
            toast.current.show({
                severity: "warn",
                summary: "Campos incompletos",
                detail: "Todos los campos son obligatorios.",
                life: 3000,
            });
            return;
        }

        // Datos para enviar al backend
        const datos = {
            proveedor: selectedProveedor.nombre,
            titulo: titulo,
            fecha: date,
        };

        try {
            // Realiza la solicitud al backend para registrar la cotización
            const response = await axios.post(route("cotizacion.registrar.cotizacion"), datos);

            if (response.status === 201) {
                // Muestra un mensaje de éxito si la cotización fue registrada correctamente
                toast.current.show({
                    severity: "success",
                    summary: "Éxito",
                    detail: "Cotización registrada correctamente.",
                    life: 3000,
                });

                // Resetea los campos del formulario
                setSelectedProveedor(null);
                obtenerCotizaciones();
                setTitulo("");
                setDate(null);
            }
        } catch (error) {
            // Manejo de errores de validación del backend
            if (error.response && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                // Recorre los errores y muestra cada uno en el Toast
                Object.entries(validationErrors).forEach(([field, messages]) => {
                    messages.forEach((message) => {
                        toast.current.show({
                            severity: "error",
                            summary: `Error en ${field}`,
                            detail: message,
                            life: 3000,
                        });
                    });
                });
            } else {
                // Muestra un mensaje genérico si ocurre un error inesperado
                toast.current.show({
                    severity: "error",
                    summary: "Error inesperado",
                    detail: "No se pudo registrar la cotización.",
                    life: 3000,
                });
            }
        }
    };

    return (
        <div className="grid">
            {/* Botón para abrir el diálogo */}
            <Button
                label="Nueva Cotización"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
            />
            <Dialog
                header="Cotización"
                visible={visible}
                maximizable
                style={{ width: "50vw" }}
                onHide={() => setVisible(false)}
            >
                {/* Componente Toast para mostrar mensajes */}
                <Toast ref={toast} />
                <div className="grid my-5">
                    {/* Dropdown para seleccionar proveedor */}
                    <div className="col-12">
                        <label htmlFor="proveedor">Proveedor</label>
                        <DropdownFilter
                            className="mb-3 col-12"
                            value={selectedProveedor}
                            onChange={(e) => setSelectedProveedor(e.value)}
                            options={proveedores}
                            optionLabel="nombre"
                            placeholder="Seleccione un proveedor"
                            valueTemplate={selectedProveedorTemplate}
                            itemTemplate={proveedorOptionTemplate}
                            filter
                            filterBy="nombre abreviacion"
                            showClear
                        />
                    </div>
                    {/* Input para el título */}
                    <div className="col-12 md:col-8 mb-3">
                        <FloatLabel>
                            <InputText
                                id="titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="w-full"
                            />
                            <label htmlFor="titulo">Título</label>
                        </FloatLabel>
                    </div>
                    {/* Calendario para la fecha */}
                    <div className="col-12 md:col-4 mb-3">
                        <FloatLabel>
                            <Calendar
                                id="fecha"
                                value={date}
                                onChange={(e) => setDate(e.value)}
                                className="w-full"
                                showIcon
                                dateFormat="dd/mm/yy"
                            />
                            <label htmlFor="fecha">Fecha</label>
                        </FloatLabel>
                    </div>
                    {/* Botón para guardar */}
                    <div className="col-12">
                        <Button
                            label="Guardar"
                            onClick={handleGuardar}
                            className="p-button-success"
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Dialogo;
