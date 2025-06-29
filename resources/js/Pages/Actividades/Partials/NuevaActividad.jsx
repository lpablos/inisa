
import React, { Component, useState, useEffect, useRef } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';    
import { ProgressSpinner } from 'primereact/progressspinner';    
import axios from "axios";

const NuevaActividad = ({usuario}) => {
    const [responsable, setResponsable] = useState('');
    const [titulo, setTitulo] = useState('');
    const [prioridad, setPrioridad] = useState(null);
    const [estatus, setEstatus] = useState(null);
    const [fecha, setFecha] = useState(null);
    const [fechaAsociada, setFechaAsociada] = useState(null)
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const [desabilitar, setDesabilitar] = useState(false)
    const toast = useRef(null);
       
    // Funcion para formatear las fechas
    useEffect(()=>{
        let fechaFormato = fecha ? fecha.toISOString().slice(0, 10) : null;
        setFechaAsociada(fechaFormato)
    },[fecha]);
    
    const prioridades = [
        { label: 'Alta', value: 'alta' },
        { label: 'Media', value: 'media' },
        { label: 'Baja', value: 'baja' },
    ];
    
    const estatuses = [
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'Realizado', value: 'realizado' },
    ];
    const [loading,setLoading] = useState(false);
    
    

        useEffect(()=>{
            setResponsable(usuario);
        },[])

        const limpiarFormulario = () =>{
            setTitulo('')
            setPrioridad(null)
            setEstatus(null)
            setFecha(null)
            setFechaAsociada(null)
            setText('')
        }
        // Funcion de validacion de informacion
        const validarDatos = ({ responsable, titulo, descripcion, prioridad, estatus, fecha }) => {
            if (!responsable) return "Debes seleccionar un responsable.";
            if (!titulo?.trim()) return "El título es obligatorio.";
            if (!descripcion?.trim()) return "La descripción es obligatoria.";
            if (!prioridad) return "Selecciona una prioridad.";
            if (!estatus) return "Selecciona un estatus.";
            if (!fecha) return "Selecciona una fecha.";

            return null; // Todo correcto
        };

        const handleSubmit = async (e) => {
            e.preventDefault(); // Evita que el formulario recargue la página
           
            const datos = {
                responsable: responsable,
                titulo:titulo,
                descripcion:text,
                prioridad: prioridad,
                estatus: estatus,
                fecha: fechaAsociada,
            }
            const error = validarDatos(datos);
            if (error) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: error,
                    life: 3000,
                });
                return;
            }

            setLoading(true)
            setDesabilitar(true)

            try {
                const response = await axios.post(route("activiades.store"), datos);            
                const { data, status} = response
                console.log("Esto es", response);
                
                if (status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: `${data.success}`,
                        life: 3000,
                    });
                    limpiarFormulario()
                    setVisible(false)
                    setDesabilitar(false)
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000);

                    // Aqui tiene que funcionar
                    // reloadRegistros()
                }
            } catch (error) {
                console.error(error);
                setLoading(false)
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Error al registrar la actividad",
                    life: 3000,
                });
                setDesabilitar(false)
            }
        };


    return (    
        <>
            <Toast ref={toast} />
            <Button
                
                icon="pi pi-paperclip"
                onClick={() => setVisible(true)}
                tooltip="Nueva Actividad"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm mr-1"
            />

            <Dialog header="Actividad" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-column gap-3">
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor={`responsable`} className="font-bold block mb-2">Responsable</label>
                                <InputText id={`responsable`} value={responsable} onChange={(e) => setResponsable(e.target.value)} className="w-full" placeholder="Nombre del responsable" readOnly={true}/>
                            </div>
                          
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor={`prioridad`} className="font-bold block mb-2">Prioridad *</label>
                                <Dropdown inputId={`prioridad`} value={prioridad} options={prioridades} onChange={(e) => setPrioridad(e.value)} placeholder="Selecciona Prioridad" className="w-full"/>
                            </div>

                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor={`estatus`} className="font-bold block mb-2">Estatus *</label>
                                <Dropdown inputId={`estatus`} value={estatus} options={estatuses} onChange={(e) => setEstatus(e.value)} placeholder="Selecciona Estatus" className="w-full"/>
                            </div>

                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor={`fecha`} className="font-bold block mb-2">Fecha Limite *</label>
                                <Calendar inputId={`fecha`} value={fecha} onChange={(e) => setFecha(e.value)} dateFormat="dd/mm/yy" className="w-full" showIcon/>
                            </div>
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor={`titulo`} className="font-bold block mb-2">Titulo *</label>
                                <InputText id={`titulo`} value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full" placeholder="Nombre de la actividad"/>
                            </div>
                        </div>

                        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
                        {loading && (
                            <div className="flex justify-content-center">
                                <ProgressSpinner />
                            </div>
                        )}
                        <div className="flex items-center gap-3 mb-4 p-4">
                            <div className="ml-auto flex gap-2">
                                <Button label="Guardar" disabled={desabilitar}/>
                            </div>
                        </div>           
                    </div>
                </form>
            </Dialog>
        </>
            
  
    );
};

export default NuevaActividad;