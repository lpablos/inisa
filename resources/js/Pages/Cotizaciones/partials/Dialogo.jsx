import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import DropdownFilter from "./SelectorFilter";
import { Toast } from "primereact/toast";
import axios from "axios";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { set } from "react-hook-form";
import { RadioButton } from "primereact/radiobutton";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Dialogo = ({ isEdit, dataToEdit, onSave, onUpdate, onClose }) => {
    const [visible, setVisible] = useState(true);
    const [selectedProveedor, setSelectedProveedor] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [proveedores, setProveedores] = useState([]);
    const [date, setDate] = useState(null);
    const [fecha_inicio_cotizacion, setFecha_inicio_cotizacion] =useState(null);
    const [fecha_final_cotizacion, setFecha_final_cotizacion] = useState(null);
    const toast = useRef(null);
    const [tipo, setTipo] = useState(""); // 'material' o 'mano_obra'

    const [selectedCliente, setSelectedCliente] = useState(null); // Status seleccionado
    const [cliente, setCliente] = useState([]); // Lista de statuses
    const [ingredient, setIngredient] = useState("");

    const handleChange = (e) => {
        console.log("Seleccionado:", e.value); // Diagnóstico
        setTipo(e.value);
    };

    useEffect(() => {
        const obtenerClientes = async () => {
            try {
                const response = await axios.get(
                    route("catalogo.list.clientes")
                );
                console.log("clientes", response.data);
                setCliente(response.data);
            } catch (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "No se pudo obtener la lista de clientes.",
                    life: 3000,
                });
            }
        };
        obtenerClientes();
    }, []);

    const [selectedMoneda, setSelectedMoneda] = useState(null); // Status seleccionado
    const [moneda, setMoneda] = useState([]); // Lista de statuses

    useEffect(() => {
        const obtenerMonedas = async () => {
            try {
                const response = await axios.get(
                    route("catalogo.list.tiposmonedas")
                );
                console.log("monedas", response.data);
                setMoneda(response.data);
            } catch (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "No se pudo obtener la lista de monedas.",
                    life: 3000,
                });
            }
        };
        obtenerMonedas();
    }, []);

    const [selectedPrioridad, setSelectedPrioridad] = useState(null); // Status seleccionado
    const [prioridad, setPrioridad] = useState([]); // Lista de statuses

    useEffect(() => {
        const obtenerPrioridad = async () => {
            try {
                const response = await axios.get(
                    route("catalogo.list.prioridades")
                );
                console.log("prioridad", response.data);
                setPrioridad(response.data);
            } catch (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "No se pudo obtener la lista de prioridades.",
                    life: 3000,
                });
            }
        };
        obtenerPrioridad();
    }, []);

    const [selectedStatus, setSelectedStatus] = useState(null); // Status seleccionado
    const [statuses, setStatuses] = useState([]); // Lista de statuses
    useEffect(() => {
        const obtenerStatuses = async () => {
            try {
                const response = await axios.get(route("catalogo.list.status"));
                console.log("status", response.data);
                setStatuses(response.data);
            } catch (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "No se pudo obtener la lista de statuses.",
                    life: 3000,
                });
            }
        };
        obtenerStatuses();
    }, []);

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

            console.log("dataToEdit", dataToEdit);
            setTitulo(dataToEdit.titulo || "");
            setDate(new Date(dataToEdit.fecha) || null);
            setFecha_final_cotizacion(new Date(dataToEdit.fecha_cotiza_fin) || null);
            setFecha_inicio_cotizacion(new Date(dataToEdit.fecha_cotiza_inicio) || null);

            setTipo(dataToEdit.es_material || "");
            let es_mano_obra
            if (dataToEdit.es_mano_obra == 1) {
                es_mano_obra = "mano_obra"
            } else {
                es_mano_obra = "material"
            }
            setTipo(es_mano_obra);
            setIngredient(dataToEdit.ingredient || "");


            const proveedorEncontrado = proveedores.find(
                (p) => p.id === dataToEdit.provedor_id
            );
            setSelectedProveedor(proveedorEncontrado || null);

            // Cargar el status seleccionado
            const statusEncontrado = statuses.find(
                (s) => s.id === dataToEdit.status_id
            );
            setSelectedStatus(statusEncontrado || null);

            const monedaEncontrada = moneda.find(
                (m) => m.id === dataToEdit.cat_moneda_id
            );
            setSelectedMoneda(monedaEncontrada || null);

            const clienteEncontrado = cliente.find(
                (m) => m.id === dataToEdit.cliente_id
            );
            setSelectedCliente(clienteEncontrado || null);

            const prioridadEncontrada = prioridad.find(
                (m) => m.id === dataToEdit.cat_prioridad_id
            );
            setSelectedPrioridad(prioridadEncontrada || null);
        }
    }, [isEdit, dataToEdit, proveedores]);

    // Manejar el guardado
    const handleGuardar = async () => {
        if (
            !selectedProveedor ||
            !titulo ||
            !date ||
            !selectedStatus ||
            !selectedMoneda ||
            !selectedCliente ||
            !selectedPrioridad ||
            !fecha_inicio_cotizacion ||
            !fecha_final_cotizacion
        ) {
            toast.current.show({
                severity: "warn",
                summary: "Campos incompletos",
                detail: "Todos los campos son obligatorios.",
                life: 3000,
            });
            return;
        }

        const datos = {
            provedor_id: selectedProveedor.id,
            status_id: selectedStatus.id,
            moneda_id: selectedMoneda.id,
            cliente_id: selectedCliente.id,
            prioridad_id: selectedPrioridad.id,
            titulo: titulo,
            fecha: date,
            fecha_inicio_cotizacion: fecha_inicio_cotizacion,
            fecha_final_cotizacion: fecha_final_cotizacion,
            es_material: tipo,
        };

        const confirmMessage = isEdit
        ? "¿Está seguro de que desea actualizar esta cotización?"
        : "¿Está seguro de que desea crear esta cotización?";

        confirmDialog({
            message: confirmMessage,
            header: isEdit ? "Confirmar Actualización" : "Confirmar Creación",
            icon: "pi pi-exclamation-triangle",
            accept: async () => {
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
                        }
                    } else {
                        const response = await axios.post(
                            route("cotizacion.registrar.cotizacion"),
                            datos
                        );
                        if (response.status === 201) {
                            toast.current.show({
                                severity: "success",
                                summary: "Éxito",
                                detail: "Cotización creada correctamente.",
                                life: 3000,
                            });
                            onSave();
                        }
                    }
                    setVisible(false);
                    onClose();
                } catch (error) {
                    toast.current.show({
                        severity: "error",
                        summary: "Error inesperado",
                        detail: "No se pudo procesar la solicitud.",
                        life: 3000,
                    });
                }
            },
            reject: () => {
                toast.current.show({
                    severity: "info",
                    summary: "Acción cancelada",
                    detail: "No se realizó ningún cambio.",
                    life: 3000,
                });
            },
        });
    };


    return (
        <>
        <ConfirmDialog />
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

                <div className="col-6 md:col-12 mb-3">
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

                <div className="col-4 md:col-4 mb-3">
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

                <div className="col-4 md:col-4 mb-3">
                    <FloatLabel>
                        <Calendar
                            id="fecha_inicio_cotizacion"
                            value={fecha_inicio_cotizacion}
                            onChange={(e) =>
                                setFecha_inicio_cotizacion(e.value)
                            }
                            className="w-full"
                            showIcon
                            dateFormat="dd/mm/yy"
                        />
                        <label htmlFor="fecha_inicio_cotizacion">
                            Fecha inicio Cotizacion
                        </label>
                    </FloatLabel>
                </div>

                <div className="col-4 md:col-4 mb-3">
                    <FloatLabel>
                        <Calendar
                            id="fecha_fin_cotizacion"
                            value={fecha_final_cotizacion}
                            onChange={(e) => setFecha_final_cotizacion(e.value)}
                            className="w-full"
                            showIcon
                            dateFormat="dd/mm/yy"
                        />
                        <label htmlFor="fecha_fin_cotizacion">
                            Fecha fin Cotizacion
                        </label>
                    </FloatLabel>
                </div>

                <div className="col-4">
                    <label htmlFor="proveedor">Status</label>
                    <DropdownFilter
                        className="mb-3 col-12"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.value)}
                        options={statuses}
                        optionLabel="nombre" // Cambia a la propiedad adecuada de tu modelo de Status
                        placeholder="Seleccione un status"
                        filter
                        filterBy="nombre"
                        showClear
                    />
                </div>

                <div className="col-4">
                    <label htmlFor="prioridad">Prioridad</label>
                    <DropdownFilter
                        className="mb-3 col-12"
                        value={selectedPrioridad}
                        onChange={(e) => setSelectedPrioridad(e.value)}
                        options={prioridad}
                        optionLabel="nombre" // Cambia a la propiedad adecuada de tu modelo de Status
                        placeholder="Seleccione un Prioridad"
                        filter
                        filterBy="nombre"
                        showClear
                    />
                </div>

                <div className="col-4">
                    <label htmlFor="Moneda">Moneda</label>
                    <DropdownFilter
                        className="mb-3 col-12"
                        value={selectedMoneda}
                        onChange={(e) => setSelectedMoneda(e.value)}
                        options={moneda}
                        optionLabel="nombre" // Cambia a la propiedad adecuada de tu modelo de Status
                        placeholder="Seleccione una Moneda"
                        filter
                        filterBy="nombre"
                        showClear
                    />
                </div>

                <div className="col-4">
                    <label htmlFor="Cliente">Cliente</label>
                    <DropdownFilter
                        className="mb-3 col-12"
                        value={selectedCliente}
                        onChange={(e) => setSelectedCliente(e.value)}
                        options={cliente}
                        optionLabel="nombre" // Cambia a la propiedad adecuada de tu modelo de Status
                        placeholder="Seleccione un Cliente"
                        filter
                        filterBy="nombre"
                        showClear
                    />
                </div>

                <div className="grid my-5">
                    <div className="col-2 md:col-4 mb-3">
                        <RadioButton
                            inputId="es_material"
                            name="tipo"
                            value="material"
                            onChange={handleChange}
                            checked={tipo === "material"}
                        />
                        <label htmlFor="es_material" className="ml-2">
                            Material
                        </label>
                    </div>

                    <div className="col-2 md:col-3 mb-3">
                        <RadioButton
                            inputId="es_mano_obra"
                            name="tipo"
                            value="mano_obra"
                            onChange={handleChange}
                            checked={tipo === "mano_obra"}
                        />
                        <label htmlFor="es_mano_obra" className="ml-2">
                            Mano de Obra
                        </label>
                    </div>

                    <div className="col-12">
                        <p>Opción seleccionada: {tipo || "Ninguna"}</p>
                    </div>
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
        </>
    );
};

export default Dialogo;
