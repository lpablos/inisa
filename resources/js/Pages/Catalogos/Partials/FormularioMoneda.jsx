import React, { Component, useEffect, useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const FormularioMoneda = ({
    showTabla, 
    dataDetalle,
    actualizarTipoMoneda,
    limpiarFormulario,
    modoForm,
    nuevoTipoMoneda,
}) => {
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
            abreviacion: '',
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
                    abreviacion: '',
                });
            }, 800);            
        }
    },[limpiarFormulario])

    const enviarFormulario = (data) =>{
        if(modoForm == 'Actualizar'){
            actualizarTipoMoneda(data)
        }
        if(modoForm == 'Guardar'){
            nuevoTipoMoneda(data)
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
                        <label htmlFor="abreviacion">Abreviación</label>
                        <InputText 
                            id="abreviacion" 
                            aria-describedby="abreviacion-help"
                            {...register(
                                "abreviacion", 
                                { 
                                    required: "Valor requerido",
                                    minLength:{
                                        value:1,
                                        message: "Minimo 1 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.abreviacion}
                        />
                        {errors.abreviacion && <small id="abreviacion-help" className="text-red-500">{errors.abreviacion.message}</small>}  
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

export default FormularioMoneda;