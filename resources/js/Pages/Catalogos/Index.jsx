import DashboardInfoCard from '@/Components/DashboardInfoCard';
import Layout from '@/Layouts/layout/layout';
import React, { Component, useState, useEffect, useRef } from 'react';
import DialogoCat from './Partials/DialogoCat';
import InfoCardCliente from '@/Components/InfoCardCliente';
import axios from "axios";
import { Toast } from 'primereact/toast';

import { ProgressSpinner } from 'primereact/progressspinner';
        



const Index = (props) =>{
    const toast = useRef(null);
    const [loading,setLoading] = useState(false);
    const [catalogo, setCatalogo] = useState(null)
    const [totalCatCliente, setTotalCatCliente] = useState(0)
    const [totalCatDepartamento, setTotalCatDepartamento] = useState(0)
    const [totalCatEmpresa, setTotalCatEmpresa] = useState(0)
    const [totalCatEstatu, setTotalCatEstatu] = useState(0)
    const [totalCatMoneda, setTotalCatMoneda] = useState(0)
    const [totalCatPrioridad, setTotalCatPrioridad] = useState(0)
    const [totalCatProvedor, setTotalCatProvedor] = useState(0)
    const [totalCatTipoServicio, setTotalCatTipoServicio] = useState(0)
    const [totalCatUnidadMedida, setTotalCatUnidadMedida] = useState(0)
    const [totalCotizacion, setTotalCotizacion] = useState(0)
    const [totalUser, setTotalUser] = useState(0)

    
    const resumenCatalogos = async () =>{
        setLoading(true)
        try {
            setTimeout( async() => {
                const response = await axios.get(route("catalogo.resumen.catalogos.asc"));        
                console.log("Este es el detalle", response);
                
                const {data,status }= response
                if(status === 200){
                    
                    setTotalCatCliente(data.CatCliente);
                    setTotalCatDepartamento(data.CatDepartamento);
                    setTotalCatEmpresa(data.CatEmpresa);
                    setTotalCatEstatu(data.CatEstatu);
                    setTotalCatMoneda(data.CatMoneda);
                    setTotalCatPrioridad(data.CatPrioridad);
                    setTotalCatProvedor(data.CatProvedor);
                    setTotalCatTipoServicio(data.CatTipoServicio);
                    setTotalCatUnidadMedida(data.CatUnidadMedida);
                    setTotalCotizacion(data.Cotizacion);
                    setTotalUser(data.User);
                }              
                setLoading(false)
            }, 800);            
            
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se logro obtener el resumen de estadisticos",
                life: 3000,
            });
        }
    }

    useEffect(()=>{
        resumenCatalogos()
    },[])
    
    
    
    return (

        <Layout>
            {loading && (
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            )}
            {loading=== false &&(
            <div className="grid">
                    <>
                    <DashboardInfoCard 
                        title="Provedores"
                        valueTitle='provedores'
                        value={totalCatProvedor+' Registros'}
                        icon="tags"
                        iconColor="purple"    
                        clickOpt = {setCatalogo}               
                    />
                    <DashboardInfoCard 
                        title="Departamentos"
                        valueTitle='departamentos'
                        value={totalCatDepartamento+' Registros'}
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>
                    
                    <InfoCardCliente
                        title="Clientes" 
                        valueTitle='clientes'
                        value={totalCatCliente+' Registros'}
                        icon="tags" 
                        iconColor="purple"
                        clickOpt = {setCatalogo}
                        link={route('catalogo.clientes.asociados.index')}
                    />
                    
                    <DashboardInfoCard 
                        title="Unidades de medida"                     
                        valueTitle='unidadesMedidas'
                        value={totalCatUnidadMedida+' Registros'}
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>
    
                    <DashboardInfoCard 
                        title="Tipos de Monedas"                     
                        valueTitle='tiposMonedas'
                        value={totalCatMoneda+' Registros'}
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>
                        
                    <DashboardInfoCard 
                        title="Tipos de Status"                     
                        valueTitle='tiposStatus'
                        value={totalCatEstatu+' Registros'}
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>
    
                    <DashboardInfoCard 
                        title="Usuarios" 
                        valueTitle='usuarios'
                        value={totalUser+' Registros'}
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>                                    
                    
                    <DashboardInfoCard 
                        title="Datos de la empresa" 
                        valueTitle='datosEmpresa'
                        icon="tags"
                        iconColor="purple"
                        clickOpt = {setCatalogo}/>
                    </>
                <DialogoCat tpOperacion={catalogo} setOperacion={setCatalogo}/>
                
            </div>
             )}    

            <div className="flex justify-content-center">
                <Toast ref={toast} />
            </div>
        </Layout>
    );
    
}

export default Index;