import React, { Component, useState, useRef, useEffect } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';


const BuscadorCotizacion = ({preguntaBusquedaCotizaciones,setPreguntaBusquedaCotizaciones, identyAsociaActividad, setIdentyAsociaActividad, recargar}) => {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [cotizacion, setCotizacion] = useState('');
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState(null);

    const [cotizaciones, setCotizaciones] = useState([]);
    const [actividadAsc, setActividadAsc] = useState(null);
    

    useEffect(()=>{
        if (preguntaBusquedaCotizaciones) {
            setVisible(preguntaBusquedaCotizaciones)
            setActividadAsc(identyAsociaActividad)
        }

    },[preguntaBusquedaCotizaciones,identyAsociaActividad])

 

    useEffect(()=>{
        if(visible===false){
            setPreguntaBusquedaCotizaciones(visible)
            limpiarFormulario()
        }
    },[visible])

    const limpiarFormulario = () =>{
        setCotizacion('')
        setTitulo('')
        setFecha(null)
        setCotizaciones([])
        setActividadAsc(null)
    }

    const validarDatos = ({ cotizacion, titulo, fecha }) => {
        const algunoTieneValor =
            (cotizacion && cotizacion.trim() !== '') ||
            (titulo && titulo.trim() !== '') ||
            fecha;

        if (!algunoTieneValor) {
            return "Debes ingresar al menos uno de los siguientes campos: Cotización, Título o Fecha.";
        }

        return null; // ✅ Todo correcto
    };
    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        setLoading(true)

        const datos = {
            cotizacion: cotizacion,
            titulo:titulo,
            fecha: fecha,
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
        consultar(datos)        
    }


    const consultar = async (datos) =>{
        try {
            const response = await axios.get(route("busqueda.actividades.cotizacion"), {params: datos});
            
            
            const {status, data} = response
            if (status === 200) {
                if(data.length == 0){
                    toast.current.show({severity:'info', summary: 'Info', detail:'No se encontraron suficientes registros', life: 5000});
                }
                setCotizaciones(data)
                setLoading(false)
            }
                            
        } catch (error) {
            setLoading(false)
            alert("Error")                
        }
    }

    const accionesTemplate = (rowData) => {
        
        return (
            <div className="flex gap-2">                 
                <Button
                    label="Ver"
                    size="small"
                    icon="pi pi-eye"
                    className="p-button-sm p-button-info"
                    rounded
                    onClick={() => handleVer(rowData)}
                />
                <Button
                    label="Asociar"
                    size="small"
                    icon="pi pi-link"
                    className="p-button-sm p-button-secondary"
                    rounded
                    onClick={() => handleAsociarActividadCotizacion(rowData)}
                />                
            </div>
        );
    };

    const handleVer = (rowData) =>{
        const url = route('cotizacion.captura.detalle', rowData.id);
        window.open(url, '_blank');
    }

    const handleAsociarActividadCotizacion = async(rowData)=>{
        try {
            const datos = {
            id_cotizacion: rowData.id,
            id_actividad:actividadAsc,
        }
            const response = await axios.post(route("asociar.cotizacion.actividad"), datos);            
            const { data, status} = response

            if (status === 201) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                limpiarFormulario()
                setIdentyAsociaActividad(null)
                recargar(1)       
                setVisible(false)    
                setLoading(false)   
                setPreguntaBusquedaCotizaciones(false)
            }
        } 
        catch (error) {
            
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error al asociar Actividad con la cotizacion",
                life: 3000,
            });
        }
        
        
    }


    return (    
        <div className="flex justify-content-center">
            <Dialog header="Asociar de Tarea y Cotización" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {/* Cotización */}
                        <div className="flex-auto min-w-[250px]">
                            <label htmlFor="cotizacion" className="font-bold block mb-2">Cotización</label>
                            <InputText
                                id="cotizacion"
                                value={cotizacion}
                                onChange={(e) => setCotizacion(e.target.value)}
                                placeholder="Número o código de cotización"
                                className="w-full"
                            />
                        </div>

                        {/* Título */}
                        <div className="flex-auto min-w-[250px]">
                            <label htmlFor="titulo" className="font-bold block mb-2">Título</label>
                            <InputText
                                id="titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Escribe el título"
                                className="w-full"
                            />
                        </div>

                        {/* Fecha */}
                        <div className="flex-auto min-w-[250px]">
                            <label htmlFor="fecha" className="font-bold block mb-2">Fecha</label>
                            <Calendar
                                id="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.value)}
                                dateFormat="dd/mm/yy"
                                placeholder="Selecciona fecha"
                                className="w-full"
                                showIcon
                            />
                        </div>
                        <div className="flex justify-content-center">
                            <Button label="Buscar" type="submit" size="small" loading={loading}/>
                        </div>              
                    </div>  
                </form>
                <DataTable value={cotizaciones} size={'small'} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="folio" header="Folio"></Column>
                    <Column field="titulo" header="Titulo"></Column>
                    <Column field="fecha" header="Fecha"></Column>
                    <Column header="Acciones" body={accionesTemplate} style={{ width: '150px' }} />
                </DataTable>
            </Dialog>
            <Toast ref={toast} />
        </div>
    );
};

export default BuscadorCotizacion;