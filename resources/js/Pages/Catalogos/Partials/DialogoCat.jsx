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
import { Toast } from 'primereact/toast';

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

    const actualizarProvedor = async (datos) =>{
        await axios
            .post(`${route("catalogo.actualiza.provedor")}`,datos)
            .then((response) => {
                const {status, data} = response
                // setDataDetalle(response)         
                if(status==201){
                    toast.current.show({severity:'success', summary: 'Success', detail:`${data.success}`, life: 3000});       
                    showTabla()
                    obtenerProvedores()
                }
                
            });
        
        
    }

    const eliminiarRegistro = async (tipo, identy) => {
        switch (tipo) {
            case "provedor":
                await eliminarProvedor(identy);
                break;

            default:
                break;
        }
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

    const eliminarProvedor = async (identy) => {
        await axios
            .delete(`${route("catalogo.delete.provedor", { id: identy })}`)
            .then(() => {
                alert("Post deleted!");
                obtenerProvedores();
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
                {tpOperacion === "provedores" && ocultarFormulario == false && (
                    <FormularioProvedor
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                    />
                )}

                {tpOperacion === "departamentos" &&
                    ocultarFormulario == false && (
                        <FormularioDepartamento
                            showTabla={showTabla}
                            dataDetalle={dataDetalle}
                        />
                    )}

                {tpOperacion === "clientes" && ocultarFormulario == false && (
                    <FormularioClientes
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
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

                {tpOperacion === "datosEmpresa" && ocultarFormulario == false && (
                    <FormularioEmpresa
                        showTabla={showTabla}
                        dataDetalle={dataDetalle}
                    />
                )}
                {tpOperacion === "provedores" && ocultarFormulario == false && <FormularioProvedor showTabla={showTabla} dataDetalle={dataDetalle} actualizarProvedor={actualizarProvedor}/>}
                <Toast ref={toast} />
            </Card>
        </Dialog>
    );
}
