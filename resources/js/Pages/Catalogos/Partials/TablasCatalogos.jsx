import React, { Component, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect } from 'react';
import axios from "axios";
import { Button } from 'primereact/button';


const TablasCatalogos = ({opMostrar, data, eliminar, shoAgregar}) => {
    
    
    const [opcionTabla, setOpcionTabla] = useState(0)
    const [registros, setRegistros] = useState([])
    const [nombreTabla, setNombreTabla] = useState('')
    

    const selecionTabla = (opMostrar) =>{
        switch (opMostrar) {
            case 'provedores':
                setOpcionTabla(1)        
                break;
            case 'departamentos':
                setOpcionTabla(2)            
                break;
            case 'clientes':
                setOpcionTabla(3)            
                break;
            case 'unidadesMedidas':
                setOpcionTabla(4)
                break;
            case 'usuarios':
                setOpcionTabla(5)            
                break;
            case 'datosEmpresa':
                setOpcionTabla(6)        
                break;        
            default:
                setOpcionTabla(0)
                break;
        }
    }

    useEffect(()=>{
        selecionTabla(opMostrar)
        setNombreTabla(opMostrar)
    },[opMostrar])

    useEffect(()=>{
        console.log("Aqui son los datos", data);
        if(data.length > 0){
            setRegistros(data);
            
        }
    },[data])


    const opcionesProvedoresTemplate = (registros) => {        
        return <>
            <Button value={registros.id} label="Actualizar" severity="Editar"/>
            <Button value={registros.id} label="Eliminar" severity="danger" onClick={()=>eliminar('provedor',registros.id)}/>
        </>;
    };
    
   
   
    return (
        <>
            <div className="flex gap-3 mb-4">
                <Button label="Registrar" className="ml-auto" onClick={()=>shoAgregar(nombreTabla)}/>            
            </div>
            
            {opcionTabla == 1 && (
                <DataTable  value={registros} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="abreviacion" header="Abreviación"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="telefono" header="Telefono"></Column>
                    <Column field="direccion" header="Dirección"></Column>
                    <Column field="colonia" header="Colonia"></Column>
                    <Column header="Opciones" body={opcionesProvedoresTemplate}></Column>
                </DataTable>  
            )}
            {opcionTabla == 2 && (
                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    <Column field="telefono" header="Telefono"></Column>
                    <Column field="direccion" header="Dirección"></Column>
                    <Column field="colonia" header="Colonia"></Column>
                </DataTable>  
            )}
        </>
            
    );
}

export default TablasCatalogos;