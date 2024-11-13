import React, { Component, useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const FormularioProvedor = ({showTabla, dataDetalle}) =>  {  
    
    const[id, setId] = useState('');
    const[nombre, setNombre] = useState('');
    const[abreviacion, setAbreviacion] = useState('');
    const[direccion, setDireccion] = useState('');
    const[telefono, setTelefono] = useState('');
    const[colonia, setColonia] = useState('');
    
    
    
    useEffect(()=>{
        if(dataDetalle){
            //Destrcutura el valor del data para solo almacenar el objecto
            console.log("este es el detalle ", dataDetalle.data);
            
            const {id,nombre,abreviacion,direccion,telefono,colonia} = dataDetalle?.data || {};
            // // Asignacion de valores
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
                            <InputText value={abreviacion} id="abreviacion"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="abreviacion">Abreviacion</label>
                        </FloatLabel>
                    </div>
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={nombre} id="nombre"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={telefono} id="telefono"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="telefono">Telefono</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={colonia} id="colonia"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="colonia">Colonia</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={direccion} id="direccion"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="direccion">Dirección</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={colonia} id="colonia"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="colonia">Colonia</label>
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
}

export default FormularioProvedor;