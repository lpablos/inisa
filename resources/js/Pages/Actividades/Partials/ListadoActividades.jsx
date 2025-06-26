import React, { useRef, useState, useEffect} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Paginator } from 'primereact/paginator';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import NuevaActividad from './NuevaActividad';

const ListadoActividades = ({nombre}) => {
    
    const [usuario, setUsuario] = useState(nombre);


    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [text, setText] = useState('Generar y enviar el informe de ventas correspondiente a la semana actual al equipo de dirección.');

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const [responsable, setResponsable] = useState('');
    const [prioridad, setPrioridad] = useState(null);
    const [estatus, setEstatus] = useState(null);
    const [fecha, setFecha] = useState(null);

    const prioridades = [
        { label: 'Alta', value: 'alta' },
        { label: 'Media', value: 'media' },
        { label: 'Baja', value: 'baja' },
    ];

    const estatuses = [
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'Realizado', value: 'realizado' },
    ];

     const tareas = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        titulo: `Tarea ${i + 1}`,
        fecha: '20/06/2025',
        descripcion: 'Enviar reporte semanal de ventas'
    }));
   

    
    return (

        <div className="card">
             <div className="grid m-1">                  
                        <div className="col-12 text-right">                           
                            <NuevaActividad usuario={nombre}/>                        
                        </div>
                    </div>


            <Accordion activeIndex={0}>
                {tareas.map((tarea, index) => (
                    <AccordionTab
                        key={tarea.id}
                        header={
                            <span className="flex align-items-center gap-2 w-full">
                                <span className="font-bold white-space-nowrap">
                                    {tarea.fecha} - <strong>{tarea.descripcion}</strong>
                                </span>
                                <Badge value={tarea.fecha} className="ml-auto" />
                            </span>
                        }
                    >
                        {/* Formulario dentro de cada acordeón */}
                        <div className="flex flex-column gap-3">
                            <div className="flex flex-wrap gap-3 mb-4">
                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`responsable-${index}`} className="font-bold block mb-2">Responsable</label>
                                    <InputText id={`responsable-${index}`} value={responsable} onChange={(e) => setResponsable(e.target.value)} className="w-full" placeholder="Nombre del responsable" />
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`prioridad-${index}`} className="font-bold block mb-2">Prioridad</label>
                                    <Dropdown inputId={`prioridad-${index}`} value={prioridad} options={prioridades} onChange={(e) => setPrioridad(e.value)} placeholder="Selecciona Prioridad" className="w-full" />
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`estatus-${index}`} className="font-bold block mb-2">Estatus</label>
                                    <Dropdown inputId={`estatus-${index}`} value={estatus} options={estatuses} onChange={(e) => setEstatus(e.value)} placeholder="Selecciona Estatus" className="w-full" />
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`fecha-${index}`} className="font-bold block mb-2">Fecha</label>
                                    <Calendar inputId={`fecha-${index}`} value={fecha} onChange={(e) => setFecha(e.value)} dateFormat="dd/mm/yy" className="w-full" showIcon />
                                </div>
                            </div>

                            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />

                            <div className="flex items-center gap-3 mb-4 p-4">
                                <div className="p-inputgroup w-[500px]">
                                    <Button icon="pi pi-search" label="Cotización" />
                                    <InputText placeholder="Vote" value="052025/001" />
                                    <Button icon="pi pi-eye" label="Visualizar" />
                                </div>
                                
                                <div className="flex gap-2">
                                    <Button label="Actualizar" />
                                    <Button label="Eliminar" className="p-button-danger p-1" />
                                </div>
                            </div>

                        </div>
                    </AccordionTab>
                ))}
               
            </Accordion>
            <Paginator first={first} rows={rows} totalRecords={120}  onPageChange={onPageChange} />
        
        </div>
    );
};

export default ListadoActividades;