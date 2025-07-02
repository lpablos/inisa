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
import EliminarMotivo from './EliminarMotivo';
import NuevaCotizacion from './NuevaCotizacion';

const ListadoActividades = ({nombre, registros = [] , paginaActual,perPage,total,onPageChange,recargar}) => {
    const [first, setFirst] = useState((paginaActual - 1) * perPage);
    const [preguntaEliminar, setPreguntaEliminar] = useState(false)
    const [preguntaNuevaCotizacion, setPreguntaNuevaCotizacion] = useState(false)
    
    const [identyDelete, setIdentyDelete] = useState(null);
    const [identyNewCotizacion, setIdentyNewCotizacion] = useState(null)
    const [tareasListado, setTareasListado] = useState([]);    
    const [usuario, setUsuario] = useState(nombre);
    const [text, setText] = useState('Generar y enviar el informe de ventas correspondiente a la semana actual al equipo de dirección.');
    
  

    const prioridad = [
        {name: 'Baja', code:'Baja'},
        {name: 'Media', code:'Media'},
        {name: 'Alta', code:'Alta'},
    ];

    const estatus = [
        {name:'Pendiente', code:'Pendiente'},
        {name:'Realizado', code:'Realizado'},
    ];

    const manejoTitulo = (nuevoTitulo, index) => {
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].titulo = nuevoTitulo;
        setTareasListado(nuevasTareas);
    };

    const manejoPrioridad = (nuevaPrioridad, index) =>{
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].prioridad = nuevaPrioridad.code;
        setTareasListado(nuevasTareas);
    };

    const manejoEstatus = (nuevoEstatus, index) =>{
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].prioridad = nuevoEstatus.code;
        setTareasListado(nuevasTareas);
    };

    const manejoFecha = (nuevaFecha, index) =>{
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].fecha = nuevaFecha;
        setTareasListado(nuevasTareas);
    }

    const manejoDescripcion = (nuevaDescripcion, index) => {
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].descripcion = nuevaDescripcion;
        setTareasListado(nuevasTareas);
    }


    const handlePageChange = (event) => {
        const nuevaPagina = event.page + 1; // PrimeReact comienza desde 0          
        onPageChange(nuevaPagina);  
    };

    const manejoEliminarActividad = (tarea,index)=>{
        setPreguntaEliminar(true)
        setIdentyDelete(tarea)
    }

    const manejoNuevaCotizacion = (tarea, index)=>{
        setPreguntaNuevaCotizacion(true)
        setIdentyNewCotizacion(tarea)
    }

    useEffect(()=>{
        setTareasListado(registros);
    },[registros])

    useEffect(() => {
            setFirst((paginaActual - 1) * perPage);
    }, [paginaActual, perPage]);
  
    
    return (

        <div className="card">
            <div className="grid m-1">                  
                <div className="col-12 text-right">                           
                    <NuevaActividad usuario={nombre}/>                        
                </div>
            </div>

            {tareasListado.length === 0 ? (
                <div className="p-4 text-gray-500 text-center italic">
                    No hay actividades registradas en el rango de fechas.
                </div>
            ) : ( 
                <>
                    <Accordion activeIndex={0}>
                        
                        {tareasListado.map((tarea, index) => (
                            <AccordionTab
                                key={tarea.id}
                                header={
                                    <span className="flex align-items-center gap-2 w-full">
                                        <span className="font-bold white-space-nowrap">
                                            <strong>{tarea.titulo}</strong>
                                        </span>
                                        <Badge value={new Date(tarea.created_at).toLocaleDateString('es-MX')} className="ml-auto" />
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
                                    {tarea.cotizaciones?.length > 0 && (
                                        <>
                                            <p>Cotizaciones Asociadas</p>
                                            <div className="flex justify-center">
                                                <div className="flex gap-2">
                                                    {tarea.cotizaciones.map((cotizacion, index) => (
                                                        <Button
                                                            outlined
                                                            key={cotizacion.id}
                                                            label={cotizacion.folio ?? 'Cotización'}
                                                            severity="secondary"
                                                            size="small"
                                                            onClick={() =>
                                                                window.open(route("cotizacion.captura.detalle", { identy: cotizacion.id }), '_blank')
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="flex justify-center">
                                        <div className="flex gap-2 p-4">
                                            <Button label="Nueva Cotización" className="p-button-sm" onClick={()=> manejoNuevaCotizacion(tarea.id, index)}/>
                                            <Button label="Actualizar" className="p-button-sm" />
                                            <Button label="Eliminar" className="p-button-sm p-button-danger" onClick={() => manejoEliminarActividad(tarea.id, index)} />
                                        </div>
                                    </div>
                                </div>
                            </AccordionTab> 
                        ))}
                    
                    </Accordion>
                </>
            )}
            <NuevaCotizacion 
                preguntaNuevaCotizacion={preguntaNuevaCotizacion}
                setPreguntaNuevaCotizacion={setPreguntaNuevaCotizacion}
                identyNewCotizacion={identyNewCotizacion}
                recargar={recargar}
            />
            <EliminarMotivo 
                activarEliminar={preguntaEliminar} 
                setPreguntaEliminar={setPreguntaEliminar} 
                identyDelete={identyDelete} 
                setIdentyDelete={setIdentyDelete} 
                recargar={recargar}
            />
            <Paginator
                first={first}
                rows={perPage}
                totalRecords={total}
                onPageChange={handlePageChange}
                rowsPerPageOptions={[20]}
            />
            
        
        </div>
    );
};

export default ListadoActividades;