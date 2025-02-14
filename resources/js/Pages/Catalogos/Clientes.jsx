import Layout from '@/Layouts/layout/layout';
import React, { Component, useRef } from 'react';
import { Toast } from 'primereact/toast';
import TablaClientes from './Partials/TablaClientes';


const Clientes = () =>{
    const toast = useRef(null);


    return (
        <Layout>
        <div className="grid">
            <div className="card col-12">
                <div className="grid m-1">
                    <div className="col-10 text-center">
                        <h3>Catálogo de Clientes</h3>
                    </div>
                </div>
                <TablaClientes/>
            </div>
        </div>

                  

        </Layout>
    );
    
}

export default Clientes;