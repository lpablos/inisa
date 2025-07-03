import React, { useRef, useState, useEffect} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
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
import BuscadorCotizacion from './BuscadorCotizacion';

const ListadoActividades = ({nombre, registros = [] , paginaActual,perPage,total,onPageChange,recargar}) => {
    const toast = useRef(null);

    const [first, setFirst] = useState((paginaActual - 1) * perPage);
    const [preguntaEliminar, setPreguntaEliminar] = useState(false)
    const [preguntaNuevaCotizacion, setPreguntaNuevaCotizacion] = useState(false)
    const [preguntaBusquedaCotizaciones, setPreguntaBusquedaCotizaciones] = useState(false)
    
    const [identyDelete, setIdentyDelete] = useState(null);
    const [identyNewCotizacion, setIdentyNewCotizacion] = useState(null)
    const [identyAsociaActividad, setIdentyAsociaActividad] = useState(null);
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
        console.log("esto entra", nuevoTitulo);
        
        const nuevasTareas = [...tareasListado];
        nuevasTareas[index].titulo = nuevoTitulo;
        console.log("esta es a tarea",nuevasTareas );
        
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

    const validarDatos = ({ responsable, titulo, descripcion, prioridad, estatus, fecha }) => {
        if (!titulo?.trim()) return "El título es obligatorio.";
        if (!descripcion?.trim()) return "La descripción es obligatoria.";
        if (!prioridad) return "Selecciona una prioridad.";
        if (!estatus) return "Selecciona un estatus.";
        if (!fecha) return "Selecciona una fecha.";
        return null; // Todo correcto
    };

    const actualizaActividad = async(tarea, index) => {     
        const datos = {
            titulo: tareasListado[index]['titulo'],
            descripcion: tareasListado[index]['descripcion'],
            prioridad: tareasListado[index]['prioridad'],
            estatus: tareasListado[index]['estatus'],
            fecha: tareasListado[index]['fecha'],
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
        
        
        try {
            const response = await axios.put(route('activiades.update', tarea), datos);    
            console.log("Este es el reponse ", response);
                    
            const { data, status} = response
    
            if (status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                recargar(1) 
            }
        } catch (error) {
            console.error(error);
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error al actualizar la actividad",
                life: 3000,
            });
            setDesabilitar(false)
        } 
        
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'No se realizo ningun cambio', life: 3000 });
    }

    const manejoActualizacion = (tarea, index)=>{
        confirmDialog({
            message: '¿Estas seguro que deseas actualizar este registro?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept: () => actualizaActividad(tarea, index),
            reject
        });
    }

    const manejoBusquedaCotizaciones = (tarea, index) =>{
        setPreguntaBusquedaCotizaciones(true)
        setIdentyAsociaActividad(tarea)
    }

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
                                            <label htmlFor={`titulo-${index}`} className="font-bold block mb-2">Titulo</label>
                                            <InputText 
                                                id={`titulo-${index}`} 
                                                value={tarea.titulo} 
                                                className="w-full" 
                                                placeholder="Titulo"
                                                onChange={(e) => manejoTitulo(e.target.value, index)}
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
                                            <Button label="Asociar Cotización" className="p-button-sm" onClick={()=> manejoBusquedaCotizaciones(tarea.id, index)}/>
                                            <Button label="Nueva Cotización" className="p-button-sm" onClick={()=> manejoNuevaCotizacion(tarea.id, index)}/>
                                            <Button label="Actualizar" className="p-button-sm" onClick={()=> manejoActualizacion(tarea.id, index)}/>
                                            <Button label="Eliminar" className="p-button-sm p-button-danger" onClick={() => manejoEliminarActividad(tarea.id, index)} />
                                        </div>
                                    </div>
                                </div>
                            </AccordionTab> 
                        ))}
                    
                    </Accordion>
                </>
            )}
            <Paginator
                first={first}
                rows={perPage}
                totalRecords={total}
                onPageChange={handlePageChange}
                rowsPerPageOptions={[20]}
            />
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
            <BuscadorCotizacion 
                preguntaBusquedaCotizaciones={preguntaBusquedaCotizaciones}
                setPreguntaBusquedaCotizaciones={setPreguntaBusquedaCotizaciones}
                identyAsociaActividad={identyAsociaActividad}
                setIdentyAsociaActividad={setIdentyAsociaActividad}
                recargar={recargar}
            />
            
            <ConfirmDialog />
            <Toast ref={toast} />
        </div>
    );
};

export default ListadoActividades;