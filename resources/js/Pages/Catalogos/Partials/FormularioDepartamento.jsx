import React, { Component, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form"; // IMPORTA useForm correctamente
import { Button } from "primereact/button";


const FormularioDepartamento = ({
    showTabla,
    dataDetalle,
    actualizarDepartamento,
    limpiarFormulario,
    modoForm,
    nuevoDepartamento
}) => {

    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset
    } = useForm( {
        // Datos del form por defecto
        defaultValues: {
            id:'',
            nombre:'',
            descripcion:'',       
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
                    id:'',
                    nombre:'',
                    descripcion:'',                  
                });
                

            }, 800);
            
        }
    },[limpiarFormulario])

    const enviarFormulario = (data) => {

        if(modoForm == 'Actualizar'){
            actualizarDepartamento(data)
        }
        if(modoForm == 'Guardar'){
            nuevoDepartamento(data)
        }
      
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
                <div className="card flex flex-wrap gap-4 p-fluid">

                    <div className="flex-auto">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText 
                            id="nombre" 
                            aria-describedby="username-help"
                            {...register(
                                "nombre", 
                                { 
                                    required: "Valor requerido",
                                    minLength:{
                                        value:4,
                                        message: "Minimo 4 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.nombre}
                        />
                        {errors.nombre && <small id="username-help" className="text-red-500">{errors.nombre.message}</small>}  
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
                                        message: "Mínimo 2 Caracteres"
                                    }
                                }
                            )}
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
};

export default FormularioDepartamento;
