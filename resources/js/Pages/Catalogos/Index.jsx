import DashboardInfoCard from '@/Components/DashboardInfoCard';
import Layout from '@/Layouts/layout/layout';
import React, { Component, useState } from 'react';
import DialogoCat from './Partials/DialogoCat';



const Index = () =>{
    

    return (

        <Layout>
            <div className="grid">
                <DashboardInfoCard 
                    title="Provedores"
                    value="152"
                    icon="tags"
                    iconColor="purple"
                />
                <DashboardInfoCard 
                    title="Departamentos"
                    value="GHS 2.100"
                    icon="tags"
                    iconColor="purple"/>
                <DashboardInfoCard 
                    title="Clientes" 
                    value="28441"
                    icon="tags" 
                    iconColor="purple"/>
                
                <DashboardInfoCard 
                    title="Unidades de medida" 
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"/>

                <DashboardInfoCard 
                    title="Usuarios" 
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"/>                                    
                
                <DashboardInfoCard 
                    title="Datos de la empresa" 
                    value="152 Unread"
                    icon="tags"
                    iconColor="purple"
                    />
                <DialogoCat/>
                
            </div>
        </Layout>
    );
    
}

export default Index;