import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import TablasCatalogos from "./TablasCatalogos";
import FormularioProvedor from "./FormularioProvedor";
import FormularioDepartamento from "./FormularioDepartamento";
import FormularioClientes from "./FormularioClientes";
import FormularioUnidadMedida from "./FormularioUnidadMedida";
import FormularioUsuario from "./FormularioUsuario";
import FormularioEmpresa from "./FormularioEmpresa";
import ConfirmarEliminacion from "./ConfirmarEliminacion";
import { Toast } from "primereact/toast";

export default function DialogoCat({ tpOperacion, setOperacion }) {
    const [visible, setVisible] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState([]); // La data de los request
    const [dataDetalle, setDataDetalle] = useState({});

    const [ocultarTabla, setOcultarTabla] = useState(false);
    const [ocultarFormulario, setOcultarFormulario] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        switch (tpOperacion) {
            case "provedores":
                setVisible(true);
                obtenerProvedores();
                setTitulo("Catalogo de Provedores");
                break;
            case "departamentos":
                setVisible(true);
                obtenerDepartamentos();
                setTitulo("Catalogo de Departamentos");
                break;
            case "clientes":
                setVisible(true);
                obtenerClientes();
                setTitulo("Catalogo de Clientes");
                break;
            case "unidadesMedidas":
                setTitulo("Catalogo de Unidades de Medida");
                obtenerUnidadesMedidas();
                setVisible(true);
                break;
            case "usuarios":
                setTitulo("Catalogo de Usuarios");
                obtenerUsuarios();
                setVisible(true);
                break;
            case "datosEmpresa":
                setTitulo("Datos de la Empresa");
                obtenerEmpresa();
                setVisible(true);
                break;
            default:
                setTitulo("");
                setVisible(false);
                setOperacion(null);
                break;
        }
    }, [tpOperacion]);

    const eliminiarRegistro = async (tipo, identy) => {
        console.log("identy en eliminiarRegistro:", identy);
        console.log("tipo en eliminiarRegistro:", tipo);
        switch (tipo) {
            case "provedor":
                await confirmarEliminacion(identy);
                break;

            case "departamento":
                await confirmarEliminacionDepartamento(identy);
                break;

            case "cliente":
                await confirmarEliminacionClientes(identy);
                break;

            default:
                break;
        }
    };

    const updateRegistro = (identy) => {
        console.log("Valor de identy recibido en updateRegistro:", identy);
        switch (tpOperacion) {
            case "provedores":
                obtenerDetalleProvedor(identy);
                break;
            case "departamentos":
                obtenerDetalleDepartamento(identy);
                break;
            case "clientes":
                obtenerDetalleCliente(identy);
                break;
            case "unidadesMedidas":
                obtenerDetalleUnidadMedida(identy);
                break;
            case "usuarios":
                obtenerDetalleUsuario(identy);
                break;
            case "datosEmpresa":
                obtenerDetalleEmpresa(identy);
                break;
            default:
                // ...
                break;
        }
        // Mostrar o oculatar formularo
        setOcultarFormulario(false);
        setOcultarTabla(true);
    };

    // CRUD Provedor
    const obtenerProvedores = async () => {
        await axios
            .get(`${route("catalogo.list.provedores")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };
    const obtenerDetalleProvedor = async (identy) => {
        await axios
            .get(`${route("catalogo.detalle.proveedor", { id: identy })}`)
            .then((response) => {
                setDataDetalle(response);
            });
    };

    const actualizarProvedor = async (datos) => {
        await axios
            .post(`${route("catalogo.actualiza.provedor")}`, datos)
            .then((response) => {
                const { status, data } = response;
                // setDataDetalle(response)
                if (status == 201) {
                    toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: `${data.success}`,
                        life: 3000,
                    });
                    showTabla();
                    obtenerProvedores();
                }
            });
    };

    // CRUD Departamento
    const obtenerDepartamentos = async () => {
        await axios
            .get(`${route("catalogo.list.departamentos")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };

    const obtenerDetalleDepartamento = async (identy) => {
        await axios
            .get(`${route("catalogo.detalle.departamento", { id: identy })}`)
            .then((response) => {
                console.log("datos departamento", response);
                setDataDetalle(response);
            });
    };

    const actualizarDepartamento = async (datos) => {
        try {
            const response = await axios.post(
                `${route("catalogo.actualiza.departamento")}`,
                datos
            );

            const { status, data } = response;

            if (status === 201) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });

                // Actualizar la tabla y obtener los departamentos
                showTabla();
                obtenerDepartamentos();
            }
        } catch (error) {
            console.error("Error actualizando el departamento:", error);

            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Ocurrió un error al actualizar el departamento.",
                life: 3000,
            });
        }
    };

    // CRUD Empresa
    const obtenerEmpresa = async () => {
        await axios
            .get(`${route("catalogo.list.empresas")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };

    const obtenerDetalleEmpresa = async (identy) => {
        await axios
            .get(`${route("catalogo.detalle.empresa", { id: identy })}`)
            .then((response) => {
                console.log("datos empresa", response);
                setDataDetalle(response);
            });
    };

    // CRUD Clientes
    const obtenerClientes = async () => {
        await axios
            .get(`${route("catalogo.list.clientes")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };

    const actualizarCliente = async (datos) => {
        try {
            const response = await axios.post(
                `${route("catalogo.actualiza.cliente")}`,
                datos
            );

            const { status, data } = response;

            if (status === 201) {
                // Mostrar mensaje de éxito
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                showTabla();
                obtenerClientes();
            } else {
                // Mostrar mensaje de error si no es un código de éxito esperado
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: `${data.error || "Ocurrió un error inesperado"}`,
                    life: 3000,
                });
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Capturar errores de validación
                const errores = error.response.data.errors;
                const mensajes = Object.values(errores).flat().join(", "); // Combina los errores en una sola cadena

                toast.current.show({
                    severity: "warn",
                    summary: "Errores de validación",
                    detail: mensajes,
                    life: 5000,
                });
            } else {
                // Mostrar cualquier otro error
                toast.current.show({
                    severity: "error",
                    summary: "Error inesperado",
                    detail: "Algo salió mal, por favor intente de nuevo.",
                    life: 3000,
                });
            }
        }
    };

    const eliminarClientes = async (identy) => {
        console.log("identy en eliminarCklientes:", identy);
        try {
            await axios.delete(
                `${route("catalogo.delete.cliente", { id: identy })}`
            );
            toast.current.show({
                severity: "success",
                summary: "cliente eliminado",
                detail: "El cliente ha sido eliminado exitosamente.",
                life: 3000,
            });
            obtenerClientes();
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar el cliente.",
                life: 3000,
            });
        }
    };

    const confirmarEliminacionClientes = (identy) => {
        toast.current.show({
            severity: "warn",
            summary: "Confirmación",
            sticky: true,
            content: (
                <ConfirmarEliminacion
                    onConfirm={() => {
                        eliminarClientes(identy);
                        toast.current.clear();
                    }}
                    onCancel={() => toast.current.clear()}
                />
            ),
        });
    };

    const obtenerDetalleCliente = async (identy) => {
        console.log("identy en obtenerDetalleCliente:", identy); // Agrega este log
        await axios
            .get(`${route("catalogo.detalle.cliente", { id: identy })}`)
            .then((response) => {
                console.log("datos cliente", response);
                setDataDetalle(response);
            });
    };

    // CRUD Usuarios
    const obtenerUsuarios = async () => {
        await axios
            .get(`${route("catalogo.list.usuarios")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };

    const obtenerDetalleUsuario = async (identy) => {
        console.log("identy en obtenerDetalleUsuario:", identy); // Agrega este log
        await axios
            .get(`${route("catalogo.detalle.usuario", { id: identy })}`)
            .then((response) => {
                console.log("datos usuario", response);
                setDataDetalle(response);
            });
    };

    // CRUD Unidades Medidas
    const obtenerUnidadesMedidas = async () => {
        await axios
            .get(`${route("catalogo.list.unidadesmedidas")}`)
            .then((response) => {
                const { data } = response;
                setData(data);
            });
    };

    // obtenerDetalleCliente
    const obtenerDetalleUnidadMedida = async (identy) => {
        console.log("identy en obtenerDetalleUnidadMedida:", identy);
        await axios
            .get(`${route("catalogo.detalle.unidadmedida", { id: identy })}`)
            .then((response) => {
                setDataDetalle(response);
            });
    };

    //aqui vamos a ver que formularios vamos a mostrar segun se seleccione
    const showAgregar = () => {
        setOcultarFormulario(false);
        setOcultarTabla(true);
    };

    const showTabla = () => {
        setOcultarFormulario(true);
        setOcultarTabla(false);
    };

    const eliminarProvedor = async (identy) => {
        console.log("identy en eliminarProvedor:", identy);
        try {
            await axios.delete(
                `${route("catalogo.delete.provedor", { id: identy })}`
            );
            toast.current.show({
                severity: "success",
                summary: "Proveedor eliminado",
                detail: "El proveedor ha sido eliminado exitosamente.",
                life: 3000,
            });
            obtenerProvedores();
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar el proveedor.",
                life: 3000,
            });
        }
    };

    // Función para mostrar el mensaje de confirmación
    const confirmarEliminacion = (identy) => {
        toast.current.show({
            severity: "warn",
            summary: "Confirmación",
            sticky: true,
            content: (
                <ConfirmarEliminacion
                    onConfirm={() => {
                        eliminarProvedor(identy);
                        toast.current.clear();
                    }}
                    onCancel={() => toast.current.clear()}
                />
            ),
        });
    };

    const eliminarDepertamento = async (identy) => {
        console.log("identy en eliminarDepertamento:", identy);
        try {
            await axios.delete(
                `${route("catalogo.delete.departamento", { id: identy })}`
            );
            toast.current.show({
                severity: "success",
                summary: "departamento eliminado",
                detail: "El departamento ha sido eliminado exitosamente.",
                life: 3000,
            });
            obtenerDepartamentos();
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar el departamento.",
                life: 3000,
            });
        }
    };

    const confirmarEliminacionDepartamento = (identy) => {
        toast.current.show({
            severity: "warn",
            summary: "Confirmación",
            sticky: true,
            content: (
                <ConfirmarEliminacion
                    onConfirm={() => {
                        eliminarDepertamento(identy);
                        toast.current.clear();
                    }}
                    onCancel={() => toast.current.clear()}
                />
            ),
        });
    };

    // const agregarProvedor = async (datos) => {
    //     await axios
    //         .post(`${route("catalogo.nuevo.provedor")}`, datos)
    //         .then(() => {
    //             alert("Post creado!");
    //         });
    // };

    return (
        <Dialog
            header={titulo}
            visible={visible}
            style={{ width: "85vw" }}
            onHide={() => {
                if (!visible) return;
                setVisible(false);
            }}
        >
            <Card>
                {/* Aqui se van a manejar todos los datos  */}
                {ocultarTabla == false && (
                    <TablasCatalogos
                        opMostrar={tpOperacion} // Esta es la operacion
                        data={data}
                        eliminar={eliminiarRegistro}
                        shoAgregar={showAgregar}
                        updateRegistro={updateRegistro}
                    />
                )}

                {/* Aqui se tienen que mostrar los formulario segun lo seleccionado */}
                {/* {tpOperacion === "provedores" && ocultarFormulario == false && (
                    <FormularioProvedor
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                    />
                )} */}

                {/* // Aqui se tienen que mostrar los formulario segun lo seleccionado  con toas */}
                {tpOperacion === "provedores" && ocultarFormulario == false && (
                    <FormularioProvedor
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                        actualizarProvedor={actualizarProvedor}
                    />
                )}

                {tpOperacion === "departamentos" &&
                    ocultarFormulario == false && (
                        <FormularioDepartamento
                            showTabla={showTabla}
                            dataDetalle={dataDetalle}
                            actualizarDepartamento={actualizarDepartamento}
                        />
                    )}

                {tpOperacion === "clientes" && ocultarFormulario == false && (
                    <FormularioClientes
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                        actualizarCliente={actualizarCliente}
                    />
                )}

                {tpOperacion === "unidadesMedidas" &&
                    ocultarFormulario == false && (
                        <FormularioUnidadMedida
                            showTabla={showTabla}
                            dataDetalle={dataDetalle}
                        />
                    )}

                {tpOperacion === "usuarios" && ocultarFormulario == false && (
                    <FormularioUsuario
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                    />
                )}

                {tpOperacion === "datosEmpresa" &&
                    ocultarFormulario == false && (
                        <FormularioEmpresa
                            showTabla={showTabla}
                            dataDetalle={dataDetalle}
                        />
                    )}

                <Toast ref={toast} />
            </Card>
        </Dialog>
    );
}
