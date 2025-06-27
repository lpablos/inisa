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

const ListadoActividades = ({nombre, registros = []}) => {

    console.log("Estos son los registros", registros);
    
    
    const [usuario, setUsuario] = useState(nombre);


    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [text, setText] = useState('Generar y enviar el informe de ventas correspondiente a la semana actual al equipo de dirección.');

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const prioridad = [
        {name: 'Baja', code:'Baja'},
        {name: 'Media', code:'Media'},
        {name: 'Alta', code:'Alta'},
    ];

    const estatus = [
        {name:'Pendiente', code:'Pendiente'},
        {name:'Realizado', code:'Realizado'},
    ];

    const manejoTitulo = (valor, posicion) =>{

    }

    const manejoPrioridad = (valor, posicion) =>{
        
    };

    const manejoEstatus = (valor, posicion) =>{
        
    };

    const manejoFecha = (valor, posicion) =>{

    }

    const manejoDescripcion = (valor, posicion) => {

    }
   

    
    return (

        <div className="card">
             <div className="grid m-1">                  
                        <div className="col-12 text-right">                           
                            <NuevaActividad usuario={nombre}/>                        
                        </div>
                    </div>

          
            <Accordion activeIndex={0}>
                {registros.map((tarea, index) => (
                    <AccordionTab
                        key={tarea.id}
                        header={
                            <span className="flex align-items-center gap-2 w-full">
                                <span className="font-bold white-space-nowrap">
                                    <strong>{tarea.titulo}</strong>
                                </span>
                                <Badge value={tarea.fecha} className="ml-auto" />
                            </span>
                        }
                    >

                         <div className="flex flex-column gap-3">
                            <div className="flex flex-wrap gap-3 mb-4">
                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`responsable-${index}`} className="font-bold block mb-2">Responsable</label>
                                    <InputText id={`responsable-${index}`} value={tarea.usuario.name} className="w-full" placeholder="Nombre del responsable" readOnly={true}/>
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`titulo-${index}`} className="font-bold block mb-2">Títutlo</label>
                                    <InputText 
                                        id={`titulo-${index}`} 
                                        value={tarea.titulo} 
                                        className="w-full" 
                                        placeholder="Titulo"
                                        onChange={(e) => manejoTitulo(e.value, index)}
                                    />
                                </div>


                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`prioridad-${index}`} className="font-bold block mb-2">Prioridad</label>
                                     <Dropdown
                                        inputId={`prioridad-${index}`}
                                        value={prioridad.find(p => p.code === tarea.prioridad)}
                                        onChange={(e) => manejoPrioridad(e.value, index)}
                                        options={prioridad}
                                        optionLabel="name"
                                        placeholder="Selecciona Prioridad"
                                        className="w-full"
                                    />
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`estatus-${index}`} className="font-bold block mb-2">Estatus</label>
                                    <Dropdown
                                        inputId={`estatus-${index}`}                                        
                                        value={estatus.find(p => p.code === tarea.estatus)}
                                        onChange={(e) => manejoEstatus(e.value)}
                                        options={estatus}
                                        optionLabel="name"
                                        placeholder="Selecciona Estatus"
                                        className="w-full"
                                    />
                                </div>

                                <div className="flex-auto min-w-[250px]">
                                    <label htmlFor={`fecha-${index}`} className="font-bold block mb-2">Fecha Limite</label>
                                    <Calendar 
                                        inputId={`fecha-${index}`} 
                                        value={tarea.fecha ? new Date(tarea.fecha) : null}
                                        onChange={(e) => manejoFecha(e.value, index)} 
                                        dateFormat="dd/mm/yy" 
                                        className="w-full" 
                                        showIcon/>
                                </div>
                            </div>
                            <Editor value={tarea.descripcion} onTextChange={(e) => manejoDescripcion(e.htmlValue, index)} style={{ height: '120px' }} />
                            <div className="flex items-center gap-3 mb-4 p-4">
                                <div className="p-inputgroup w-[500px]">
                                    <Button icon="pi pi-search" label="Cotización" className="p-button-sm" />
                                    <InputText placeholder="Vote" value="052025/001" className="text-sm" />
                                    <Button icon="pi pi-eye" label="Visualizar" className="p-button-sm" />
                                </div>

                                <div className="flex gap-2">
                                    <Button label="Actualizar" className="p-button-sm" />
                                    <Button label="Eliminar" className="p-button-sm p-button-danger" />
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