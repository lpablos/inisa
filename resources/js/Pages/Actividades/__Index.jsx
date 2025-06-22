import Layout from "@/Layouts/layout/layout";
import React, { Component, useState } from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import DetalleActividad from "./Partials/DetalleActividad";
import ListadoActividad from "./Partials/__ListadoActividad";
import BusquedaActividad from "./Partials/BusquedaActividad";

const Index = (props) => {

    // console.log("estos son los props", props);
    
    

    return (
        <Layout>
            <div className="card grid">
                {/* <Menu/> */}

                <div className="w-12 pr-3">
                    <BusquedaActividad/>
                    <Splitter style={{ height: '65vh' }}>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
                            <ListadoActividad/>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
                            <DetalleActividad/>
                        </SplitterPanel>
                    </Splitter>    
                </div>
                
            </div>
        </Layout>
    );
};

export default Index;