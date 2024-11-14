import React, {useEffect, useState,useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Messages } from 'primereact/messages';



const FormularioProvedor = ({showTabla, dataDetalle, actualizarProvedor}) =>  {  

    const {register, handleSubmit, formState: { errors }} = useForm()
    
    const[id, setId] = useState('');
    const[nombre, setNombre] = useState('');
    const[abreviacion, setAbreviacion] = useState('');
    const[direccion, setDireccion] = useState('');
    const[telefono, setTelefono] = useState('');
    const[colonia, setColonia] = useState('');

    useEffect(()=>{
        if(dataDetalle){
            //Destrcutura el valor del data para solo almacenar el objecto
            const {id,nombre,abreviacion,direccion,telefono,colonia} = dataDetalle?.data || {};            // // Asignacion de valores
            setId(id);
            setNombre(nombre);
            setAbreviacion(abreviacion);
            setDireccion(direccion);
            setTelefono(telefono);
            setColonia(colonia);

        }else{
            setData({})
        }
    },[dataDetalle]);

    const enviarFormulario = () =>{
        const datos = {
            id: id,
            nombre: nombre,
            abreviacion: abreviacion,
            direccion: direccion,
            telefono: telefono,
            colonia: colonia,
        }
        actualizarProvedor(datos)
        
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
                {errors && (
                    <>
                        <label htmlFor="">Errores en los campos del formulario</label>
                        <ul>
                            {errors.nombre && <li><label htmlFor="abreviacion">{errors.nombre.message}</label></li>}  
                            {errors.abreviacion && <li><label htmlFor="abreviacion">{errors.abreviacion.message}</label></li>}
                            {errors.telefono && <li><label htmlFor="abreviacion">{errors.telefono.message}</label></li>}  
                            {errors.colonia && <li><label htmlFor="abreviacion">{errors.colonia.message}</label></li>}  
                            {errors.direccion && <li><label htmlFor="abreviacion">{errors.direccion.message}</label></li>}    
                        </ul>
                        
                    </>
                )}
                
                
                
                <div className="card flex flex-column md:flex-row gap-3">
                                      
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={nombre} 
                                id="nombre"  
                                {...register(
                                    "nombre", 
                                    { 
                                        required: "Nombre:'Requerido'",
                                        minLength:{
                                            value:4,
                                            message: "Nombre: 'Minimo 4'"
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
                                value={abreviacion} 
                                {...register(
                                    "abreviacion", 
                                    { 
                                        minLength:{
                                            value:4,
                                            message: "Dirección: 'Caracteres mínimo 4 Caracteres'"
                                        }
                                    }
                                )}
                                invalid={!!errors.abreviacion}
                                id="abreviacion"  
                                onChange={(e) => setAbreviacion(e.target.value)} 
                                />
                            <label htmlFor="abreviacion">Abreviacion</label>     
                        </FloatLabel>
                       
                    </div>
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText 
                                value={telefono} 
                                id="telefono"  
                                {...register(
                                    "telefono", 
                                    { 
                                        minLength:{
                                            value:8,
                                            message: "Teléfono: 'Mínimo 8 Digitos'"
                                        }
                                    }
                                )}
                                invalid={!!errors.telefono}
                                onChange={(e) => setTelefono(e.target.value)} />
                            <label htmlFor="telefono">Telefono</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={colonia} 
                                        id="colonia"  
                                        {...register(
                                            "colonia", 
                                            { 
                                                minLength:{
                                                    value:8,
                                                    message: "Colonia: 'Mínimo 3 Digitos'"
                                                }
                                            }
                                        )}
                                        invalid={!!errors.colonia}
                                        onChange={(e) => setColonia(e.target.value)} />
                            <label htmlFor="colonia">Colonia</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={direccion} 
                                        {...register(
                                            "direccion", 
                                            { 
                                                minLength:{
                                                    value:8,
                                                    message: "Dorección: 'Mínimo 3 Digitos'"
                                                }
                                            }
                                        )}
                                        invalid={!!errors.direccion}
                                        id="direccion"  
                                        onChange={(e) => setDireccion(e.target.value)} />
                            <label htmlFor="direccion">Dirección</label>
                        </FloatLabel>
                    </div>

                   
                </div>

                  

                <div className="flex gap-3 mb-4">
                    <Button
                        type="submit"
                        severity="success"
                        label="Guardar"
                        className="ml-auto"
                    />
                </div>

            </form>

        </>
    );
}

export default FormularioProvedor;
