import React, { Component, useState, useEffect, useRef } from "react";
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import { Divider } from 'primereact/divider';
        
        
        

const NuevaCotizacion = ({preguntaNuevaCotizacion, setPreguntaNuevaCotizacion, identyNewCotizacion, recargar}) => {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [identyActividad,setIdentyActividad] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    const [fecha, setFecha] = useState(null);
    const [plantillaSeleccionada, setPlantillaSeleccionada] = useState(null);

    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);

    const [estatusSeleccionado, setEstatusSeleccionado] = useState(null);
    const [prioridadSeleccionada, setPrioridadSeleccionada] = useState(null);
    const [monedaSeleccionada, setMonedaSeleccionada] = useState(null);
    // Catalogos
    const [clientes, setClientes ] = useState([])
    const [plantillas, setPlantillas] = useState([
        { name: 'Material', code: 'material' },
        { name: 'Material y Mano de Obra', code: 'mano_obra' }
    ]);
    const [estatusOpciones, setEstatusOpciones] = useState([])
    const [prioridades, setPrioridades] = useState([])
    const [monedas, setMonedas]= useState([])

    useEffect(()=>{
        if(preguntaNuevaCotizacion === true){
            setVisible(preguntaNuevaCotizacion)
        }        
    },[preguntaNuevaCotizacion])

    useEffect(()=>{
        if(visible === false){
            setPreguntaNuevaCotizacion(visible)
        }
    },[visible])

    useEffect(()=>{
        setIdentyActividad(identyNewCotizacion)
    },[identyNewCotizacion])

    function validarDatos(datos) {
        if (!datos.titulo || datos.titulo.trim() === "") return "El título es obligatorio.";
        if (!datos.cliente_id) return "Debes seleccionar un cliente.";
        if (!datos.fecha) return "Debes seleccionar una fecha.";
        if (!datos.es_material) return "Selecciona la plantilla.";
        if (!datos.status_id) return "Debes seleccionar un estatus.";
        if (!datos.prioridad_id) return "Debes seleccionar una prioridad.";
        if (!datos.moneda_id) return "Selecciona una moneda.";
        if (!datos.fecha_inicio_cotizacion) return "Debes seleccionar una Inicio Vigencia";
        if (!datos.fecha_final_cotizacion) return "Debes seleccionar una Fin Vigencia.";
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const datos = {
            "status_id": estatusSeleccionado?.id ?? null,
            "moneda_id": monedaSeleccionada?.id ?? null ,
            "cliente_id": clienteSeleccionado?.id ?? null,
            "prioridad_id": prioridadSeleccionada?.id ?? null,
            "titulo": titulo ?? null,
            "fecha": fecha ?? null,
            "fecha_inicio_cotizacion": fechaInicio ?? null,
            "fecha_final_cotizacion": fechaFin ?? null,
            "es_material": plantillaSeleccionada?.code ?? null
        }

        const error = validarDatos(datos);

        if (error) {
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error,
                life: 3000,
            });
            return;
        }

        generarNuevaCotizacion(datos)
        
    }


    const generarNuevaCotizacion = async (datos) =>{
        try {
            const response = await axios.post(route("cotizacion.registrar.cotizacion"), datos);            
            const { data, status} = response
            const {folio} = data.data;

            if (status === 201) {

                
                
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                toast.current.show({
                    severity:'info', 
                    summary: 'Info', 
                    detail:`Folio Generado : ${folio}`, 
                    life: 5000
                });                
                asociarActvidadCotizacion(data.data)                    
                
            }
        } catch (error) {
            console.error(error);
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error al registrar la cotizacion",
                life: 3000,
            });
            setLoading(false)
        }
    }

    const asociarActvidadCotizacion = async(data) =>{
        const {id} = data // Identifica la cotizacion
        try {
            const datos = {
                "cotizacion_id": id,
                "actividad_id": identyActividad,
            }
            const response = await axios.post(route("asociar.activid.cotizacion"), datos);            
            const { data, status} = response

            if (status === 201) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                
                setLoading(false)
                limpiarFormulario()
                setVisible(false)
                setIdentyActividad(null)
                recargar(1)
              
            }
        } 
        catch (error) {
            console.error(error);
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error al asociar Actividad con la cotizacion",
                life: 3000,
            });
        }
    }

    const limpiarFormulario = () =>{
        setEstatusSeleccionado(null)
        setMonedaSeleccionada(null)
        setClienteSeleccionado(null)
        setPrioridadSeleccionada(null)
        setTitulo('')
        setFecha(null)
        setFechaInicio(null)
        setFechaFin(null)
        setPlantillaSeleccionada(null)
    }
    

    const obtenerStatuses = async () => {
        try {
            const response = await axios.get(route("catalogo.list.status"));          
            const estatus = response.data.map(item => ({
                id: item.id,
                name: `(${item.abreviacion}) - ${item.descripcion}`,
                code: item.id
            }));
            setEstatusOpciones(estatus);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de prioridades.",
                life: 3000,
            });
        }
    };

    const obtenerPrioridad = async () => {
        try {
            const response = await axios.get(route("catalogo.list.prioridades"));
            const prioridad = response.data.map(item => ({
                id: item.id,
                name: `${item.nombre}`,
                code: item.id
            }));
            setPrioridades(prioridad);

        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de statuses.",
                life: 3000,
            });
        }
    };

    const obtenerMonedas = async () => {
        try {
            const response = await axios.get(
                route("catalogo.list.tiposmonedas")
            );
            const monedas = response.data.map(item => ({
                id: item.id,
                name: `${item.abreviacion} - ${item.nombre}`,
                code: item.abreviacion
            }));
            setMonedas(monedas);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de monedas.",
                life: 3000,
            });
        }
    };

    const obtenerClientes = async () => {
        try {
            const response = await axios.get(route("catalogo.list.clientes"));
            const clienteAsc = response.data.map(item => ({
                id: item.id,
                name: `${item.abreviacion} - ${item.nombre}`,
                code: item.nombre
            }));
            setClientes(clienteAsc);
        } catch (error) {
            
            
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de clientes.",
                life: 3000,
            });
        }
    };

    useEffect(() => {        
        obtenerStatuses()
        obtenerPrioridad()
        obtenerMonedas()
        obtenerClientes()
    },[visible])
   
  
   
  
    
  
    
    return(
        <div className="flex justify-content-center">

             <Toast ref={toast} />
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Cotización Generada a Partir de una Actividad" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                
                <p className="m-0 mb-4 font-bold text-center">
                  Nota: Esta cotización quedará relacionada con la actividad en curso.
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <Fieldset legend="Datos Generales de Cotización">
                        <div className="formgrid grid p-fluid">
                            <div className="field col-12">
                                <label htmlFor="titulo" className="font-bold block mb-2">Título</label>
                                <InputText id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                            </div>

                            <div className="field col-12">
                                <label htmlFor="cliente" className="font-bold block mb-2">Cliente</label>
                                <Dropdown 
                                    id="cliente"
                                    value={clienteSeleccionado}
                                    onChange={(e) => setClienteSeleccionado(e.value)}
                                    options={clientes}
                                    optionLabel="name"
                                    placeholder="Selecciona un cliente"
                                    className="w-full"
                                />
                            </div>

                            <div className="field col-6">
                                <label htmlFor="fecha" className="font-bold block mb-2">Fecha</label>
                                <Calendar
                                    id="fecha"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.value)}
                                    dateFormat="dd/mm/yy"
                                    showIcon
                                    className="w-full"
                                />
                            </div>

                            <div className="field col-6">
                                <label htmlFor="plantilla" className="font-bold block mb-2">Plantilla</label>
                                <Dropdown 
                                    id="plantilla"
                                    value={plantillaSeleccionada}
                                    onChange={(e) => setPlantillaSeleccionada(e.value)}
                                    options={plantillas}
                                    optionLabel="name"
                                    placeholder="Selecciona una plantilla"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="formgrid grid p-fluid">
                            <div className="field col-4">
                                <label htmlFor="estatus" className="font-bold block mb-2">Estatus</label>
                                <Dropdown 
                                    id="estatus"
                                    value={estatusSeleccionado}
                                    onChange={(e) => setEstatusSeleccionado(e.value)}
                                    options={estatusOpciones}
                                    optionLabel="name"
                                    placeholder="Selecciona un estatus"
                                    className="w-full"
                                />
                            </div>

                            <div className="field col-4">
                                <label htmlFor="prioridad" className="font-bold block mb-2">Prioridad</label>
                                <Dropdown 
                                    id="prioridad"
                                    value={prioridadSeleccionada}
                                    onChange={(e) => setPrioridadSeleccionada(e.value)}
                                    options={prioridades}
                                    optionLabel="name"
                                    placeholder="Selecciona una prioridad"
                                    className="w-full"
                                />
                            </div>

                            <div className="field col-4">
                                <label htmlFor="moneda" className="font-bold block mb-2">Moneda</label>
                                <Dropdown 
                                    id="moneda"
                                    value={monedaSeleccionada}
                                    onChange={(e) => setMonedaSeleccionada(e.value)}
                                    options={monedas}
                                    optionLabel="name"
                                    placeholder="Selecciona una moneda"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <Divider />

                        <h5 className="mt-3">Periodo de Validez</h5>
                        <div className="formgrid grid p-fluid">
                            <div className="field col-4">
                                <label htmlFor="fechaInicio" className="font-bold block mb-2">Inicio Vigencia</label>
                                <Calendar
                                    id="fechaInicio"
                                    value={fechaInicio}
                                    onChange={(e) => setFechaInicio(e.value)}
                                    dateFormat="dd/mm/yy"
                                    showIcon
                                    className="w-full"
                                />
                            </div>

                            <div className="field col-4">
                                <label htmlFor="fechaFin" className="font-bold block mb-2">Fin Vigencia</label>
                                <Calendar
                                    id="fechaFin"
                                    value={fechaFin}
                                    onChange={(e) => setFechaFin(e.value)}
                                    dateFormat="dd/mm/yy"
                                    showIcon
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </Fieldset>
                    <div className="flex justify-content-center">
                        <Button label="Generar" type="submit" size="small" loading={loading}/>
                    </div>
                </form>
            </Dialog>
        </div>
        
    )

}
export default NuevaCotizacion;