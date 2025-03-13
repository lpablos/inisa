import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import TablaUsuarios from './Partials/TablaUsuarios';

const UsuariosSys = () => {
    return (
        <Layout>
            <div className="grid">
                <div className="card col-12">
                    <div className="grid m-1">
                        <div className="col-10 text-center">
                            <h3>Catálogo de Usuarios</h3>
                        </div>
                    </div>
                    <TablaUsuarios/>
                </div>
            </div>
        </Layout>
    );
    
}

export default UsuariosSys;