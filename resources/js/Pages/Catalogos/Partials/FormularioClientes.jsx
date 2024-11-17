import React, { Component, useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const FormularioClientes = ({ 
    showTabla, 
    dataDetalle, 
    actualizarCliente,
    limpiarFormulario, 
    modoForm,
    nuevoCliente
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
            nombre: '',
            abreviacion: '',
            direccion: '',
            telefono: '',
            ext: '',
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
                    abreviacion:'',
                    direccion:'',
                    telefono:'',                    
                    ext: '',
                });
            }, 800);
            
        }
    },[limpiarFormulario])

    const enviarFormulario = (data) =>{
        if(modoForm == 'Actualizar'){
            actualizarCliente(data)
        }
        if(modoForm == 'Guardar'){
            nuevoCliente(data)
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
                                        value:3,
                                        message: "Minimo 4 Caracteres"
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
                                    minLength:{
                                        value:1,
                                        message: "Minimo 4 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.abreviacion}
                        />
                        {errors.abreviacion && <small id="abreviacion-help" className="text-red-500">{errors.abreviacion.message}</small>}  
                    </div>
                  
                    <div className="flex-auto">
                        <label htmlFor="telefono">Teléfono</label>
                        <InputText 
                            id="telefono" 
                            aria-describedby="telefono-help"
                            {...register(
                                "telefono", 
                                { 
                                    minLength:{
                                        value:8,
                                        message: "Minimo 8 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.telefono}
                        />
                        {errors.telefono && <small id="telefono-help" className="text-red-500">{errors.telefono.message}</small>}  
                    </div>

                    <div className="flex-auto">
                        <label htmlFor="ext">Extensión(s)</label>
                        <InputText 
                            id="ext" 
                            aria-describedby="ext-help"
                            {...register(
                                "ext", 
                                { 
                                    minLength:{
                                        value:1,
                                        message: "Minimo 4 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.ext}
                        />
                        {errors.ext && <small id="ext-help" className="text-red-500">{errors.ext.message}</small>}  
                    </div>

                    <div className="flex-auto">
                        <label htmlFor="direccion">Dirección(s)</label>
                        <InputText 
                            id="direccion" 
                            aria-describedby="direccion-help"
                            {...register(
                                "direccion", 
                                { 
                                    
                                    minLength:{
                                        value:3,
                                        message: "Minimo 3 Caracteres"
                                    }
                                }
                            )}
                            invalid={!!errors.ext}
                        />
                        {errors.direccionext && <small id="direccion-help" className="text-red-500">{errors.direccion.message}</small>}  
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

export default FormularioClientes;
