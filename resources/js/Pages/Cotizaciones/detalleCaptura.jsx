import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import DetalleCotizacionTabla from './partials/DetalleCotizacionTabla';
import MenuDetalle from './partials/MenuDetalle';
import DialogDetalleCotizacion from './partials/DialogDetalleCotizacion';

const detalleCaptura =(props) => {    
    const {cotizacion} = props
    return (
        <Layout>
            <div className="grid">
                <div className="card col-12">
                    <div class="grid m-1">
                        <div class="col-10 text-center">
                            <p>COMPAÑIA: INNOVACIÓN NACIONAL DE INGENIERÍA S.A. DE C.V.</p>
                            <p>Título: INSTALACIÓN Y CANALIZACIÓN DE CCM BOMBAS DE CISTERNA DE AGUA.</p>
                        </div>                      
                        <div class="col-2 text-right">
                            <DialogDetalleCotizacion cotizacion={cotizacion}/>
                        </div>
                    </div>
                    <DetalleCotizacionTabla/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;