import React, { Component, useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const FormularioDepartamento = ({showTabla, dataDetalle}) =>  {

    const[id, setId] = useState('');
    const[nombre, setNombre] = useState('');
    const[descripcion, setDescripcion] = useState('');




    useEffect(()=>{
        if(dataDetalle){
            //Destrcutura el valor del data para solo almacenar el objecto
            console.log("este es el detalle ", dataDetalle.data);

            const {id,nombre,descripcion} = dataDetalle?.data || {};
            // // Asignacion de valores
            setId(id);
            setNombre(nombre);
            setDescripcion(descripcion);


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
                            <InputText value={nombre} id="nombre"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText value={descripcion} id="descripcion"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="telefono">Descripcion</label>
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

export default FormularioDepartamento;
