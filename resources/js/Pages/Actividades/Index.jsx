import Layout from "@/Layouts/layout/layout";
import React, { Component, useEffect, useState,useRef } from "react";
import BusquedaActividad from "./Partials/BusquedaActividad";
import ListadoActividades from "./Partials/ListadoActividades";
import { LogarithmicScale } from "chart.js";

const Index = (props) => {
    const refHermanoB = useRef(null);

    const [nombre, setNombre] = useState(props?.auth?.user?.name ?? "");


    // Adecuacion 
    // const [registros, setRegistros] = useState([]);
    // const [lastPageUrl, setLastPageUrl] = useState('');
    // const [nextPageUrl, setNextPageUrl] = useState('');  
    // const [totalRegistros, setTotalRegistros] = useState(0);
    // const [porPagina, setPorPagina] = useState(10);
    // const [paginaActual, setPaginaActual] = useState(1);

    const [registros, setRegistros] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const [total, setTotal] = useState(0);

    const recargarBusqueda = (pagina = 1) => {
        if (refHermanoB.current) {
            refHermanoB.current.reloadListado(pagina); // ✅ esto ahora funcionará
        }
    };

    const onPageChange = (nuevaPagina) =>{
        recargarBusqueda(nuevaPagina);
    }

    return (
        <Layout>
            <div className="card grid">
                <div className="w-12 pr-3">
                    <BusquedaActividad 
                        setRegistros ={setRegistros}
                        setPaginaActual={setPaginaActual}
                        setPerPage={setPerPage}
                        setTotal={setTotal}
                        ref={refHermanoB} 
                    />    
                    <ListadoActividades 
                        nombre={nombre} 
                        registros={registros} 
                        paginaActual={paginaActual}
                        perPage={perPage}
                        total={total}
                        onPageChange={onPageChange}
                        recargar={recargarBusqueda} 
                    />           
                </div>
            </div>
        </Layout>
    );
};

export default Index;