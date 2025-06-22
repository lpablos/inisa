import Layout from "@/Layouts/layout/layout";
import React, { Component, useState } from "react";
import BusquedaActividad from "./Partials/BusquedaActividad";
import ListadoActividades from "./Partials/ListadoActividades";

const Index = (props) => {

    // console.log("estos son los props", props);
    
    

    return (
        <Layout>
            <div className="card grid">
                <div className="w-12 pr-3">
                    <BusquedaActividad/>    
                    <ListadoActividades/>            
                </div>
            </div>
        </Layout>
    );
};

export default Index;