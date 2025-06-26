import Layout from "@/Layouts/layout/layout";
import React, { Component, useEffect, useState } from "react";
import BusquedaActividad from "./Partials/BusquedaActividad";
import ListadoActividades from "./Partials/ListadoActividades";
import { LogarithmicScale } from "chart.js";

const Index = (props) => {
    
    const [nombre, setNombre] = useState(props?.auth?.user?.name ?? "");
    
    return (
        <Layout>
            <div className="card grid">
                <div className="w-12 pr-3">
                    <BusquedaActividad/>    
                    <ListadoActividades nombre={nombre}/>            
                </div>
            </div>
        </Layout>
    );
};

export default Index;