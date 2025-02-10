import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import axios from "axios";
import { elements } from 'chart.js';

const BusquedaCotizacion = ({activarBusqueda}) =>{
    const [estatus, setEstatus] = useState([]);
    const [selectedEstatus, setSelectedEstatus] = useState(null);
    const [disabled, setDisabled] = useState(false)
    console.log("Este es ==>", selectedEstatus);
    
    const toast = useRef(null);

    useEffect(() => {
        obtenerStatuses();
        setTimeout(() => {
            setSelectedEstatus({
                "id": 3,
                "nombre": "EnProcesoFaltaAlgo",
                "abreviacion": "!",
                "descripcion": "! - En Proceso O Falta Algo"
            })
        }, 800);
    }, []);

    const obtenerStatuses = async () => {
        try {
            const response = await axios.get(route("catalogo.list.status"));
            const {data} = response;
            console.log("Este es", data);
            
            const todosEstatus = data.map(element => ({
                id: element.id,
                nombre: element.nombre,
                abreviacion: element.abreviacion,
                descripcion: element.abreviacion+' - '+element.descripcion,
            }))
                        
            setEstatus(todosEstatus);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de statuses.",
                life: 3000,
            });
        }
    };

    const realizarBusqueda = () =>{
        activarBusqueda(selectedEstatus)
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 1000);
    }

    return (
        <div className="p-inputgroup md:w-23rem ">
            <Dropdown value={selectedEstatus} onChange={(e) => setSelectedEstatus(e.value)} options={estatus} optionLabel="descripcion" placeholder="Seleciona Estatus" className="w-full md:w-17rem" />
            <Button icon="pi pi-search" className="p-button-warning" onClick={()=>realizarBusqueda()} disabled={disabled}/>
        </div>
        
    );
    
}

export default BusquedaCotizacion;