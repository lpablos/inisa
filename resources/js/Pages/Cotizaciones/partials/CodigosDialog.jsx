import React, { Component, useState, useRef, useCallback} from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import axios from "axios";
import { useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const CodigosDialog = ({seleccionCotizacion,codigosShow, setCodigosShow}) => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState(null);
    const [codigosAsoc, setCodigosAsoc] = useState([]);
    const isConfirming = useRef(false);
    const [identyCotizacion, setIdentyCotizacion] = useState(null)

    useEffect(()=>{
        setVisible(codigosShow)
    },[codigosShow])

    useEffect(()=>{
        setIdentyCotizacion(seleccionCotizacion)
    },[seleccionCotizacion])

    useEffect(()=>{
        console.log("Este es el visibe", visible);
        
        if(visible){
            todosCodigosAsociados()
        }
    },[visible])

    const accept = () => {
        newCodigo()
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Sin efecto', detail: 'Intenta con otros valores', life: 3000 });
    }

    const confirmacion = () => {
        if (isConfirming.current) return; // Evita ejecución doble
        isConfirming.current = true;
        confirmDialog({
            message: '¿Estas seguro de continuar?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept: () => {
                accept();
                isConfirming.current = false; // Restablece el estado
            },
            reject: () => {
                reject();
                isConfirming.current = false; // Restablece el estado
            }
        });
    }; 


    const newCodigo = async () =>{
        setIsLoading(true)
        try {
            const  datos = {
                codigo:codigo,
                descripcion:descripcion,
                fecha:fecha,
                identyCotizacion:identyCotizacion
            }            
            const response = await axios.post(route("cotiacion.codigos.nuevo"),datos);
            if (response.status === 201) {
                toast.current.show({ severity: 'success', summary: 'Nuevo Registro', detail: 'Código Asociado Correctamene', life: 3000 });
                setIsLoading(false)
                resetFormulario()
                todosCodigosAsociados()
            }            
        } catch (error) {
            toast.current.show({severity:'error', summary: 'Error', detail:'Error al guarda, Intenta mas tarde', life: 3000});
            setIsLoading(false)
        }
    }

    const todosCodigosAsociados = async() =>{
        setIsLoading(true);
        try {
            const identy = identyCotizacion;
            const response = await axios.get(route("codigos.asociados.cotizacion", { identy }));
            if (response.status === 200) {
                const {data,success} = response.data
                setCodigosAsoc(data);
                setIsLoading(false)                
            }  
        } catch (error) {
            toast.current.show({severity:'error', summary: 'Error', detail:'Error al listar los datos, Intenta mas tarde', life: 3000});
            setIsLoading(false)
        }
    }

    

    const resetFormulario =()=>{
        setCodigo('')
        setDescripcion('')
        setFecha(null)
    }
    
    const accionesTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button
                severity="danger"
                size="small"
                icon="pi pi-trash"
                tooltip="Eliminar"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                // onClick={() => validacionConcepto(rowData) }
            />
            <Button
                severity="success"
                size="small"
                icon="pi pi-refresh"
                tooltip="Actualizar"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                // onClick={() => validacionConcepto(rowData) }
            />
        </div>
    );
    return (
        <div className="flex justify-content-center">
            <Toast ref={toast} />
            <ConfirmDialog />
            <Button label="Ampliar" size="small" icon="pi pi-paperclip" onClick={() => setVisible(true)} />
            <Dialog header="Códigos" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); setCodigosShow(false); }}>
                <>
                    <div className="card flex flex-wrap gap-4 p-fluid">
                        <div className="flex-auto">
                            <label htmlFor="integeronly" className="font-bold block mb-2">Código</label>
                            <InputText value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="withoutgrouping" className="font-bold block mb-2">Descripción</label>
                            <InputText value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="minmaxfraction" className="font-bold block mb-2">Fecha</label>
                            <Calendar value={fecha} onChange={(e) => setFecha(e.target.value)} />
                        </div>
                        {isLoading===false && (
                            <div className="flex-auto">                            
                                <Button onClick={confirmacion} icon="pi pi-check" label="Confirm" className="mt-4"></Button>
                            </div>
                        )}
                   
                    </div>
                    {isLoading === true  && (
                        <div className=" flex justify-content-center">
                            <ProgressSpinner />
                        </div>
                    )}
                    {isLoading === false && (
                        <div className="card">
                            <DataTable value={codigosAsoc} tableStyle={{ minWidth: '50rem' }}>
                                <Column field="codigo" header="Codigo"></Column>
                                <Column field="descripcion" header="Descripcion"></Column>
                                <Column field="fecha" header="Fecha"></Column>
                                <Column field="quantity" header="Opciones" body={accionesTemplate}></Column>
                            </DataTable>
                        </div>
                    )}
                </>
            </Dialog>
        </div>
    );
}

export default CodigosDialog;