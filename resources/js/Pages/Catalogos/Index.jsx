import DashboardInfoCard from '@/Components/DashboardInfoCard';
import Layout from '@/Layouts/layout/layout';
import React, { Component, useState } from 'react';
import DialogoCat from './Partials/DialogoCat';



const Index = (props) =>{
    const [catalogo, setCatalogo] = useState(null)
    console.log("El catalogo selecionado", catalogo);
    
    
    return (

        <Layout>
            <div className="grid">
                <DashboardInfoCard 
                    title="Provedores"
                    valueTitle='provedores'
                    value="152"
                    icon="tags"
                    iconColor="purple"    
                    clickOpt = {setCatalogo}               
                />
                <DashboardInfoCard 
                    title="Departamentos"
                    valueTitle='departamentos'
                    value="GHS 2.100"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>
                <DashboardInfoCard 
                    title="Clientes" 
                    valueTitle='clientes'
                    value="28441"
                    icon="tags" 
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>
                
                <DashboardInfoCard 
                    title="Unidades de medida"                     
                    valueTitle='unidadesMedidas'
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>

                <DashboardInfoCard 
                    title="Tipos de Monedas"                     
                    valueTitle='tiposMonedas'
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>
                    
                <DashboardInfoCard 
                    title="Tipos de Status"                     
                    valueTitle='tiposStatus'
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>

                <DashboardInfoCard 
                    title="Usuarios" 
                    valueTitle='usuarios'
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>                                    
                
                <DashboardInfoCard 
                    title="Datos de la empresa" 
                    valueTitle='datosEmpresa'
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    clickOpt = {setCatalogo}/>


                <DialogoCat tpOperacion={catalogo} setOperacion={setCatalogo}/>
                
            </div>
        </Layout>
    );
    
}

export default Index;