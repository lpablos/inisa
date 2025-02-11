import React, { Component, useState, useRef } from 'react';
import axios from "axios";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
        


import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';
        

const BusquedaAvanzadaCotizacion = ({resultadosBusqueda}) => {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [catCliente, setCatCliente]= useState([])
    const [catEstatus, setCatEstatus]= useState([])
    const [catPrioridad, setCatPrioridad]= useState([])
    const [cargando, setCargango]=useState(false);
    const [deshabilitar, setDeshabilitar] = useState(false)


    const [cotizacion, setCotizacion] = useState('');
    const [titulo, setTitulo] = useState('');
    const [cliente, setCliente]= useState(null);
    const [estatus, setEstatus]= useState(null);
    const [prioridad, setPrioridad]= useState(null);
    const [fechaInicial, setFechaInicial]= useState('');
    const [fechaFinal, setFechaFinal]= useState('');

    const obtenerClientes = async () => {
        try {
            const response = await axios.get(
                route("catalogo.list.clientes")
            );
            const {data} = response
            const nuevoObjecto = data.map((item)=>({
                id: item.id,
                nombre: `${item.abreviacion} - ${item.nombre}`,
                abreviacion: item.abreviacion,
            }));
            setCatCliente(nuevoObjecto);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de clientes.",
                life: 3000,
            });
        }
    };

    const obtenerStatuses = async () => {
        try {
            const response = await axios.get(route("catalogo.list.status"));
            const {data} = response
            const nuevoObjecto2 = data.map((item)=>({
                id: item.id,
                nombre: item.nombre,
                abreviacion: item.abreviacion,
                descripcion: `${item.abreviacion} : ${item.descripcion}`,
            }));
           
            setCatEstatus(nuevoObjecto2);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de statuses.",
                life: 3000,
            });
        }
    };

    const obtenerPrioridad = async () => {
        try {
            const response = await axios.get(
                route("catalogo.list.prioridades")
            );
            const {data} = response
            setCatPrioridad(data);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de prioridades.",
                life: 3000,
            });
        }
    };

    const buscarAvanzadamente = async() =>{
        setCargango(true)
        setDeshabilitar(true)
        const datos = {
            cotizacion: cotizacion,
            titulo: titulo,
            cliente: cliente,
            estatus: estatus,
            fechaInicial: fechaInicial,
            fechaFinal: fechaFinal,
            prioridad:prioridad,
        };
        try {
            const response = await axios.post(route("buscador.cotizaciones.list"),datos);
            const {data} = response
            resultadosBusqueda(data)
            limpiarFormulario()
            setVisible(false)
            setTimeout(() => {
                setCargango(false)
                setDeshabilitar(false)                
            }, 800);
            // setCatEstatus(nuevoObjecto2);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de statuses.",
                life: 3000,
            });
            setCargango(false)
            setDeshabilitar(false)
        }
    }

    const limpiarFormulario = () =>{
        setCotizacion('')
        setTitulo('')
        setCliente(null)
        setEstatus(null)
        setPrioridad(null)
        setFechaInicial('')
        setFechaFinal('')
    }

    useEffect(()=>{
        obtenerClientes()
        obtenerStatuses()
        obtenerPrioridad()
    },[])

    return (
        <div className="flex justify-content-center ml-2">
            <Button 
                icon="pi pi-search-plus" 
                tooltip="Búsqueda avanzada" 
                tooltipOptions={{ showDelay: 100, hideDelay: 300 }} 
                rounded 
                onClick={() => setVisible(true)} />
            <Dialog header="Buscador Avanzado" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
               
            <div className="card">
                {cargando === false && (
                    <>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="Cotización" className="font-bold block mb-2">
                                    Cotización
                                </label>
                                <InputText value={cotizacion} onChange={(e) => setCotizacion(e.target.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="Titulo" className="font-bold block mb-2">
                                    Titulo
                                </label>
                                <InputText value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                                
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="Cliente" className="font-bold block mb-2">
                                    Cliente
                                </label>
                                <Dropdown value={cliente} onChange={(e) => setCliente(e.value)} options={catCliente} optionLabel="nombre" placeholder="Seleciona el Cliente" className="w-full md:w-14rem" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="Estatus" className="font-bold block mb-2">
                                    Estatus
                                </label>
                                <Dropdown value={estatus} onChange={(e) => setEstatus(e.value)} options={catEstatus} optionLabel="descripcion" placeholder="Seleciona Cliente" className="w-full md:w-14rem" />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="Prioridad" className="font-bold block mb-2">
                                    Prioridad
                                </label>
                                <Dropdown value={prioridad} onChange={(e) => setPrioridad(e.value)} options={catPrioridad} optionLabel="nombre" placeholder="Seleciona Prioridad" className="w-full md:w-14rem" />
                            </div>    
                            <div className="flex-auto">
                                <label htmlFor="Fecha Inicial" className="font-bold block mb-2">
                                    Fecha Inicial
                                </label>
                                <Calendar value={fechaInicial} onChange={(e) => setFechaInicial(e.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="Fecha Final" className="font-bold block mb-2">
                                    Fecha Final
                                </label>
                                <Calendar value={fechaFinal} onChange={(e) => setFechaFinal(e.value)} />
                            </div>                 
                        </div>    
                    </>
                )}
                {cargando === true && (
                    <div className="card flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                )}
                <div className="flex flex-wrap justify-content-center gap-1">
                    <Button label="Limpiar" severity="info" onClick={()=>limpiarFormulario()} disabled={deshabilitar}/>
                    <Button label="Buscar" severity="info" onClick={()=>buscarAvanzadamente()} disabled={deshabilitar}/>
                </div>          
            </div>

            </Dialog>
        </div>
    );
    
}

export default BusquedaAvanzadaCotizacion;