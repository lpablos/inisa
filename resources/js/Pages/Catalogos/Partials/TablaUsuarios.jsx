import React, { Component , useState, useRef, useEffect} from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { DataTable } from 'primereact/datatable';
import NewUsuarioDialog from './NewUsuarioDialog';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const TablaUsuarios = () => {
     const toast = useRef(null);
    const [loading, setLoading] = useState(false)
    const [catUsuarios, setCatUsuarios] = useState([]);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [registroEdicion, setRegistroEdicion] = useState(null); // Detalle del registro

    useEffect(()=>{
        obtenerCatUsuarios()
    },[])

    const obtenerCatUsuarios = async () =>{
        setLoading(true)
        try {
            setTimeout( async() => {
                const response = await axios.get(route("listado.catalogos.detalle.usuarios"));     
                       
                const {data,status }= response
                if(status == 200){
                    const listadoUsuarios = data.map( item =>({
                        id: item.id,
                        nombre: item.name,
                        email: item.email ||'',
                        rol: item.roles[0].name || '',
                        // telefono: item.telefono || ''
                    }))
                    
                    setCatUsuarios(listadoUsuarios)
                    setLoading(false)
                }                
            }, 800);  
        } catch (error) {
            setLoading(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se logro cargar el Catalogo de Clientes",
                life: 3000,
            });
        }
    }

    const opcionesAsc = (rowData) => {
        
        return (
            <div className="flex flex-wrap justify-content-center gap-1 mb-4">
                <Button icon="pi pi-eye" rounded severity="info" aria-label="User" onClick={() => editarRegistro(rowData.id)}  />
                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" onClick={()=>confirmEliminar(rowData)} tooltip="Eliminar" tooltipOptions={{ position: 'left' }}/>
            </div>
        );
    };

    const editarRegistro = async (registro) =>{
        
        try {            
            const response = await axios.get(route("catalogos.detalle.usuario.asc", { id: registro }));  
            const {status, data} = response
            if(status === 200){
                setRegistroEdicion(data);
                setMostrarModal(true);
            }
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo obtener la lista de Usuarios.",
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
                const response = await axios.delete(`${route("eliminar.usuario.registro", { id: identy })}`);
                console.log("Este es el response", response);
                
                const {data,status }= response
                if(status===200){
                    toast.current.show({
                        severity: "success",
                        summary: "Registro Eliminado",
                        detail: "Cliente Eliminado Correctamente",
                        life: 3000,
                    });
                    setLoading(false);
                    obtenerCatUsuarios()
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

    const recargarListado = () =>{
        setTimeout(() => {
            obtenerCatUsuarios();            
        }, 700);
    }





    return (
        <div className="col-12">
            <NewUsuarioDialog reloadRegistros={recargarListado} mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} registro={registroEdicion}/>
            <div className="card">
                {loading && (
                    <div className="flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                )}
                {catUsuarios.length}
                {loading === false && catUsuarios.length > 0 && (
                    <DataTable value={catUsuarios} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="nombre" header="Nombre"></Column>
                        <Column field="email" header="Correo"></Column>
                        <Column field="rol" header="Rol"></Column>
                        <Column field="opciones" header="Opciones" body={opcionesAsc} ></Column>
                    </DataTable>
                )}
                {loading === false && catUsuarios.length === 0 && (
                    <div className="flex justify-content-center">
                        <Message severity="info" text="No existen registros suficientes" />
                    </div>
                )}
            </div>
            <Toast ref={toast} />           
            <ConfirmDialog />
        </div>
    );
    
}

export default TablaUsuarios;