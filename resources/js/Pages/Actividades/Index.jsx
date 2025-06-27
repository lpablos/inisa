import Layout from "@/Layouts/layout/layout";
import React, { Component, useEffect, useState } from "react";
import BusquedaActividad from "./Partials/BusquedaActividad";
import ListadoActividades from "./Partials/ListadoActividades";
import { LogarithmicScale } from "chart.js";

const Index = (props) => {
    
    const [nombre, setNombre] = useState(props?.auth?.user?.name ?? "");
    const [registros, setRegistros] = useState([]);
    console.log("registros--->", registros);
    
    


    const resultadoBusqueda = (resultado = []) =>  { 
        setRegistros(resultado);
    }
    return (
        <Layout>
            <div className="card grid">
                <div className="w-12 pr-3">
                    <BusquedaActividad resultadoBusqueda={resultadoBusqueda}/>    
                    <ListadoActividades nombre={nombre} registros={registros}/>           
                </div>
            </div>
        </Layout>
    );
};

export default Index;