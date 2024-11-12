import React, { Component, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect } from 'react';
import axios from "axios";


const TablasCatalogos = ({opMostrar}) => {
    
    
    const [opcionTabla, setOpcionTabla] = useState(0)

    const selecionTabla = (opMostrar) =>{
        switch (opMostrar) {
            case 'provedores':
                obtenerProvedores()
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
    },[opMostrar])
    
    const obtenerProvedores = async() =>{
        await axios.get(`${route('catalogo.list.provedores')}`).then((response) => {
            console.log("Este es el listado", response);
        });
    }
   
    return (
        <>
            {opcionTabla == 1 && (
                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    <Column field="abreviacion" header="Abreviación"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="telefono" header="Telefono"></Column>
                    <Column field="direccion" header="Dirección"></Column>
                    <Column field="colonia" header="Colonia"></Column>
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