import React, { Component, useEffect, useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const FormularioUnidadMedida = ({
    showTabla, 
    dataDetalle,
    actualizarUnidadMedida,
    limpiarFormulario,
    modoForm,
    nuevoUnidadMedida,
}) =>  {

    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset
    } = useForm( {
        // Datos del form por defecto
        defaultValues: {
            id: '',
            nombre: '',
            abreviatura: '',
            descripcion: '',
        },
    })

    useEffect(()=>{
        if(dataDetalle){
            //Esto es para el detalle del validador
            const {data} = dataDetalle            
            reset(data);

        }else{
            setData({})
        }
    },[dataDetalle]);

    useState(()=>{
        if(limpiarFormulario){                      
            setTimeout(() => {
                reset({
                    id: '',
                    nombre: '',
                    abreviatura: '',
                    descripcion: '',
                });
            }, 800);            
        }
    },[limpiarFormulario])

    const enviarFormulario = (data) =>{
        if(modoForm == 'Actualizar'){
            actualizarUnidadMedida(data)
        }
        if(modoForm == 'Guardar'){
            nuevoUnidadMedida(data)
        }
    }

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
                <div className="card flex flex-wrap gap-4 p-fluid">
                    <div className="flex-auto">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText 
                            id="nombre" 
                            aria-describedby="nombre-help"
                            {...register(
                                "nombre", 
                                { 
                                    required: "Valor requerido",
                                    minLength:{
                                        value:2,
                                        message: "Minimo 2 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.nombre}
                        />
                        {errors.nombre && <small id="nombre-help" className="text-red-500">{errors.nombre.message}</small>}  
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="abreviatura">Abreviatura</label>
                        <InputText 
                            id="abreviatura" 
                            aria-describedby="abreviatura-help"
                            {...register(
                                "abreviatura", 
                                { 
                                    required: "Valor requerido",
                                    minLength:{
                                        value:1,
                                        message: "Minimo 1 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.abreviatura}
                        />
                        {errors.abreviatura && <small id="abreviatura-help" className="text-red-500">{errors.abreviatura.message}</small>}  
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="descripcion">Descripción</label>
                        <InputText 
                            id="descripcion" 
                            aria-describedby="descripcion-help"
                            {...register(
                                "descripcion", 
                                {                                     
                                    minLength:{
                                        value:2,
                                        message: "Minimo 2 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.descripcion}
                        />
                        {errors.descripcion && <small id="descripcion-help" className="text-red-500">{errors.descripcion.message}</small>}  
                    </div>
                    <div className="mt-4 flex justify-end w-full">
                        <Button
                            type="submit"
                            severity="success"
                            label="Guardar"
                            className="ml-auto"
                        />
                    </div>
                </div>
            </form>

        </>
    );
}

export default FormularioUnidadMedida;
