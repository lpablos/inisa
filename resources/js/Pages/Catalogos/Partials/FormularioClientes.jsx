import React, { Component, useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const FormularioClientes = ({ showTabla, dataDetalle }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [abreviacion, setAbreviacion] = useState("");
    const [apellido_m, setApellidoM] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ext, setExt] = useState("");

    useEffect(() => {
        if (dataDetalle) {
            //Destrcutura el valor del data para solo almacenar el objecto
            console.log("este es el detalle ", dataDetalle.data);

            const {
                id,
                nombre,
                abreviacion,
                ap_materno,
                direccion,
                telefono,
                ext,
            } = dataDetalle?.data || {};
            //  Asignacion de valores
            setId(id);
            setNombre(nombre);
            setAbreviacion(abreviacion);
            setApellidoM(ap_materno);
            setDireccion(direccion);
            setTelefono(telefono);
            setExt(ext);
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
                                value={abreviacion}
                                id="abreviacion"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="abreviacion">Abreviacion</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={apellido_m}
                                id="ap_materno"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="ap_materno">Apellidos</label>
                        </FloatLabel>
                    </div>
                </div>



                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={telefono}
                                id="telefono"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="telefono">telefono</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={ext}
                                id="ext"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="ext">ext</label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={direccion}
                                id="direccion"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor="direccion">direccion</label>
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

export default FormularioClientes;
