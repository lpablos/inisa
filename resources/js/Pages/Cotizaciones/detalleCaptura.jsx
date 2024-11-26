import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import DetalleCotizacionTabla from './partials/DetalleCotizacionTabla';
import MenuDetalle from './partials/MenuDetalle';
// import DialogDetalleCotizacion from './partials/DialogDetalleCotizacion';

const detalleCaptura =() => {
    
    return (
        <Layout>
            <div className="grid">
                <div className="card col-12">
                    {/* <DialogDetalleCotizacion/> */}
                    <MenuDetalle/>
                    <DetalleCotizacionTabla/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;