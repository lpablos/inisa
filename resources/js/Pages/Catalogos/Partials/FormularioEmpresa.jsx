import React, { Component, useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const FormularioEmpresa = ({ showTabla, dataDetalle }) => {
    console.log("este es el detalle ", dataDetalle);

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [codigo_postal, setCP] = useState("");
    const [colonia, setColonia] = useState("");
    const [correo, setCorrreo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [direccion, setDireccion] = useState("");
    const [logotipo, setLogotipo] = useState("");
    const [telefono1, setTelefono1] = useState("");
    const [telefono2, setTelefono2] = useState("");
    const [telefono_urgencias1, setTelefonoUrgencias1] = useState("");
    const [telefono_urgencias2, setTelefonoUrgencias2] = useState("");

    useEffect(() => {
        if (dataDetalle) {
            //Destrcutura el valor del data para solo almacenar el objecto
            console.log("este es el detalle empresa ", dataDetalle.data);

            const {
                id,
                nombre,
                codigo_postal,
                colonia,
                correo,
                descripcion,
                direccion,
                logotipo,
                telefono1,
                telefono2,
                telefono_urgencias1,
                telefono_urgencias2,
            } = dataDetalle?.data || {};

            // Asignacion de valores
            setId(id);
            setNombre(nombre);
            setCP(codigo_postal);
            setColonia(colonia);
            setCorrreo(correo);
            setDescripcion(descripcion);
            setDireccion(direccion);
            setLogotipo(logotipo);
            setTelefono1(telefono1);
            setTelefono2(telefono2);
            setTelefonoUrgencias1(telefono_urgencias1);
            setTelefonoUrgencias2(telefono_urgencias2);
        } else {
            setData({});
        }
    }, [dataDetalle]);

    return (
        <>
            <div className="flex gap-3 mb-4">
                <Button
                    label="Mostrar Tabla"
                    className="ml-auto"
                    onClick={() => showTabla()}
                />
            </div>
            <form>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={nombre}
                                id="nombre"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={descripcion}
                                id="descripcion"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="descripcion">Descripcion</label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={direccion}
                                id="descripcion"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="direccion">direccion</label>
                        </FloatLabel>
                    </div>
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={codigo_postal}
                                id="codigo_postal"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="codigo_postal">Codigo Postal</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={colonia}
                                id="colonia"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="colonia">Colonia</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={correo}
                                id="correo"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="correo">Correo</label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={telefono1}
                                id="telefono1"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="telefono1">Telefono 1</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={telefono2}
                                id="telefono2"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="telefono2">Telefono 2</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={telefono_urgencias1}
                                id="telefono_urgencias1"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="telefono_urgencias1">
                                Telefono Urgencias 1
                            </label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={telefono_urgencias2}
                                id="telefono_urgencias2"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="telefono_urgencias2">
                                Telefono Urgencias 2
                            </label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="card flex flex-column md:flex-row gap-3">

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={logotipo}
                                id="logotipo"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="logotipo">Logotipo</label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="flex gap-3 mb-4">
                    <Button
                        severity="success"
                        label="Guardar"
                        className="ml-auto"
                    />
                </div>
            </form>
        </>
    );
};

export default FormularioEmpresa;
