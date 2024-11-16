import React, { Component, useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useForm } from "react-hook-form"; // IMPORTA useForm correctamente
import { Button } from "primereact/button";

const FormularioDepartamento = ({
    showTabla,
    dataDetalle,
    actualizarDepartamento,
}) => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        if (dataDetalle) {
            //Destrcutura el valor del data para solo almacenar el objecto
            console.log("este es el detalle ", dataDetalle.data);

            const { id, nombre, descripcion } = dataDetalle?.data || {};
            // Asignacion de valores
            setId(id);
            setNombre(nombre);
            setDescripcion(descripcion);
        } else {
            setData({});
        }
    }, [dataDetalle]);

    const enviarFormulario = () => {

        const datos = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,

        }
        actualizarDepartamento(datos); // Llama a la función pasada por props con los datos del formulario
    };

    return (
        <>
            <div className="flex gap-3 mb-4">
                <Button
                    label="Mostrar Tabla"
                    className="ml-auto"
                    onClick={() => showTabla()}
                />
            </div>
            <form onSubmit={handleSubmit(enviarFormulario)}>

            {errors && (
                    <>
                        <label htmlFor="">Errores en los campos del formulario</label>
                        <ul>
                            {errors.nombre && <li><label htmlFor="abreviacion">{errors.nombre.message}</label></li>}
                            {errors.descripcion && <li><label htmlFor="descripcion">{errors.descripcion.message}</label></li>}
                        </ul>

                    </>
                )}
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={nombre}
                                id="nombre"
                                {...register(
                                    "nombre",
                                    {
                                        required: "Nombre:'Requerido'",
                                        minLength:{
                                            value:8,
                                            message: "Nombre: 'Minimo 8'"
                                        }
                                    }
                                )}
                                invalid={!!errors.nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText
                                value={descripcion}
                                id="descripcion"
                                {...register(
                                    "descripcion",
                                    {
                                        required: "Descripcion:'Requerido'",

                                    }
                                )}
                                invalid={!!errors.descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                            <label htmlFor="descripcion">Descripcion</label>
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

export default FormularioDepartamento;
