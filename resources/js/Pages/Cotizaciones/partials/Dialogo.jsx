import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import DropdownFilter from "./SelectorFilter";
import { Toast } from "primereact/toast";
import axios from "axios";

const Dialogo = ({ isEdit, dataToEdit, onSave, onUpdate, onClose }) => {
    const [visible, setVisible] = useState(true);
    const [selectedProveedor, setSelectedProveedor] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [proveedores, setProveedores] = useState([]);
    const [date, setDate] = useState(null);
    const toast = useRef(null);

    // Obtener la lista de proveedores
    useEffect(() => {
        const obtenerProveedores = async () => {
            try {
                const response = await axios.get(
                    route("catalogo.list.provedores")
                );
                setProveedores(response.data);
            } catch (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "No se pudo obtener la lista de proveedores.",
                    life: 3000,
                });
            }
        };
        obtenerProveedores();
    }, []);

    // Cargar datos en caso de edición
    useEffect(() => {
        if (isEdit && dataToEdit) {
            setTitulo(dataToEdit.titulo || "");
            setDate(new Date(dataToEdit.fecha) || null);
            const proveedorEncontrado = proveedores.find(
                (p) => p.id === dataToEdit.provedor_id
            );
            setSelectedProveedor(proveedorEncontrado || null);
        }
    }, [isEdit, dataToEdit, proveedores]);

    // Manejar el guardado
    const handleGuardar = async () => {
        if (!selectedProveedor || !titulo || !date) {
            toast.current.show({
                severity: "warn",
                summary: "Campos incompletos",
                detail: "Todos los campos son obligatorios.",
                life: 3000,
            });
            return;
        }

        const datos = {
            proveedor: selectedProveedor.id,
            titulo: titulo,
            fecha: date,
        };

        try {
            if (isEdit) {
                const response = await axios.put(
                    route("cotizacion.actualiza.cotizacion", {
                        id: dataToEdit.id,
                    }),
                    datos
                );

                if (response.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Éxito",
                        detail: "Cotización actualizada correctamente.",
                        life: 3000,
                    });
                    onUpdate();
                } else {
                    toast.current.show({
                        severity: "error",
                        summary: "Error",
                        detail: "No se pudo actualizar la cotización.",
                        life: 3000,
                    });
                }
            } else {
                const response = await axios.post(
                    route("cotizacion.registrar.cotizacion"),
                    datos
                );
                console.log(response);
                console.log(response.status);



                if (response.status === 201) {

                    toast.current.show({
                        severity: "success",
                        summary: "Éxito",
                        detail:
                            response.data.success ||
                            "Cotización creada correctamente.",
                        life: 3000,
                    });
                    onSave();
                }
            }
            setVisible(false);
            onClose();
        } catch (error) {
            if (error.response && error.response.data.errors) {
                Object.entries(error.response.data.errors).forEach(
                    ([field, messages]) => {
                        messages.forEach((message) => {
                            toast.current.show({
                                severity: "error",
                                summary: `Error en ${field}`,
                                detail: message,
                                life: 3000,
                            });
                        });
                    }
                );
            } else {
                toast.current.show({
                    severity: "error",
                    summary: "Error inesperado",
                    detail: "No se pudo procesar la solicitud.",
                    life: 3000,
                });
            }
        }
    };

    return (
        <Dialog
            header={isEdit ? "Editar Cotización" : "Nueva Cotización"}
            visible={visible}
            maximizable
            style={{ width: "50vw" }}
            onHide={() => {
                setVisible(false);
                onClose();
            }}
        >
            <Toast ref={toast} />
            <div className="grid my-5">
                <div className="col-12">
                    <label htmlFor="proveedor">Campaña</label>
                    <DropdownFilter
                        className="mb-3 col-12"
                        value={selectedProveedor}
                        onChange={(e) => setSelectedProveedor(e.value)}
                        options={proveedores}
                        optionLabel="nombre"
                        placeholder="Seleccione un proveedor"
                        filter
                        filterBy="nombre abreviacion"
                        showClear
                    />
                </div>
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
                <div className="col-12">
                    <Button
                        label={isEdit ? "Actualizar" : "Guardar"}
                        onClick={handleGuardar}
                        className="p-button-success"
                    />
                </div>
            </div>
        </Dialog>
    );
};

export default Dialogo;
