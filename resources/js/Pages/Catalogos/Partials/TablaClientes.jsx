import React, { Component, useEffect, useState, useRef} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import NewClienteDialog from './NewClienteDialog';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import axios from 'axios';

const TablaClientes = () => {
    
    const toast = useRef(null);
    
    const [catClientes, setCatClientes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [mostrarModal, setMostrarModal] = useState(false);
    const [registroEdicion, setRegistroEdicion] = useState(null); // Detalle del registro

    const obtenerCatClientes = async () =>{
        setLoading(true)
        try {
            setTimeout( async() => {
                const response = await axios.get(route("catalogos.listado.clientes.empresa"));            
                const {data,status }= response
                if(status == 200){
                    const listadoClientes = data.map( item =>({
                        id: item.id,
                        nombre: item.abreviacion+' - '+item.nombre,
                        numeroProvedor: item.numeroProvedor || '',
                        email: item.email ||'',
                        telefono: item.telefono || ''
                    }))
                    setCatClientes(listadoClientes)
                    setLoading(false)
                }                
            }, 800);            
            
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se logro cargar el Catalogo de Clientes",
                life: 3000,
            });
        }
    }
    const editarRegistro = async (registro) =>{
        
        try {            
            const response = await axios.get(route("catalogos.detalle.cliente.asc", { id: registro }));  
            const {status, data} = response
            if(status === 200){
                setRegistroEdicion(data);
                setMostrarModal(true);
            }
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de clientes.",
                life: 3000,
            });
        }
    }

    const confirmEliminar = (row) => {
        
        confirmDialog({
            message: `¿Estas seguro de eliminar a : ${row.nombre} ?`,
            header: 'Confirmacion de Eliminar',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept:() => acceptEliminar(row.id),
            reject:() => cancelarEliminar()
        });
    };

    const acceptEliminar = async (identy) => {

        setLoading(true);
        try {
            setTimeout(async() => {
                const response = await axios.delete(`${route("catalogo.eliminar.cliente", { id: identy })}`);
                const {data,status }= response
                if(status===200){
                    toast.current.show({
                        severity: "success",
                        summary: "Registro Eliminado",
                        detail: "Cliente Eliminado Correctamente",
                        life: 3000,
                    });
                    setLoading(false);
                    obtenerCatClientes()
                }                
            }, 800);
            
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar el cliente.",
                life: 3000,
            });
            setLoading(false);
        }
        
    }

    const cancelarEliminar = () => {
        toast.current.show({ severity: 'warn', summary: 'Sin Detalle', detail: 'No se modifico ningun registro', life: 3000 });
    }


    useEffect(()=>{
        obtenerCatClientes()
    },[]);

    const opcionesAsc = (rowData) => {
        
        return (
            <div className="flex flex-wrap justify-content-center gap-1 mb-4">
                <Button icon="pi pi-eye" rounded severity="info" aria-label="User" onClick={() => editarRegistro(rowData.id)}  />
                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" onClick={()=>confirmEliminar(rowData)} tooltip="Eliminar" tooltipOptions={{ position: 'left' }}/>
            </div>
        );
    };
    return (
        <div className="col-12">
            <NewClienteDialog reloadRegistros={obtenerCatClientes} mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} registro={registroEdicion} />
            <div className="card">
                {loading && (
                    <div className="flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                )}
                {loading === false && catClientes.length > 0 && (
                    <DataTable value={catClientes} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="nombre" header="Nombre"></Column>
                        <Column field="numeroProvedor" header="Num. Provedor"></Column>
                        <Column field="email" header="Correo"></Column>
                        <Column field="telefono" header="Teléfono"></Column>
                        <Column field="opciones" header="Opciones" body={opcionesAsc} ></Column>
                    </DataTable>
                )}
                {loading === false && catClientes.length === 0 && (
                    <Message severity="info" text="No existen registros suficientes" />
                )}
            </div>
            <Toast ref={toast} />
            
            <ConfirmDialog />
        </div>
    
    );
    
}

export default TablaClientes;