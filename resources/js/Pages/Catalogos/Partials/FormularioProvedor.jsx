import React, {useEffect, useState,useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";




const FormularioProvedor = ({
    showTabla, 
    dataDetalle, 
    actualizarProvedor, 
    limpiarFormulario, 
    modoForm,
    nuevoProvedor

}) =>  {  
    // Todo lo relacionado con la manipulacion del formulario
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
            abreviacion:'',
            direccion:'',
            telefono:'',
            colonia:'',
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
                    colonia:'',
                });
                

            }, 800);
            
        }
    },[limpiarFormulario])

    
    const enviarFormulario = (data) =>{
        if(modoForm == 'Actualizar'){
            actualizarProvedor(data)
        }
        if(modoForm == 'Guardar'){
            nuevoProvedor(data)
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
                        <label htmlFor="abreviacion">Abreviación</label>
                        <InputText 
                            id="abreviacion" 
                            aria-describedby="abreviacion-help"
                            {...register(
                                "abreviacion", 
                                { 
                                    minLength:{
                                        value:2,
                                        message: "Mínimo 2 Caracteres"
                                    }
                                }
                            )}
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
                                        message: "Mínimo 8 Caracteres"
                                    }
                                }
                            )}
                        />
                        {errors.telefono && <small id="telefono-help" className="text-red-500">{errors.telefono.message}</small>}  

                    </div>

                    <div className="flex-auto">
                        <label htmlFor="colonia">Colonia</label>
                        <InputText 
                            id="colonia" 
                            aria-describedby="colonia-help"
                            {...register(
                                "colonia", 
                                { 
                                    minLength:{
                                        value:2,
                                        message: "Mínimo 2 Caracteres"
                                    }
                                }
                            )}
                        />
                        {errors.colonia && <small id="colonia-help" className="text-red-500">{errors.colonia.message}</small>}  

                    </div>

                    <div className="flex-auto">
                        <label htmlFor="direccion">Dirección</label>
                        <InputText 
                            id="direccion" 
                            aria-describedby="direccion-help"
                            {...register(
                                "direccion", 
                                { 
                                    minLength:{
                                        value:2,
                                        message: "Mínimo 2 Caracteres"
                                    }
                                }
                            )}
                        />
                        {errors.direccion && <small id="direccion-help" className="text-red-500">{errors.direccion.message}</small>}  

                    </div>

                    {/* <div className="w-full">
                       
                    </div> */}
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

export default FormularioProvedor;
