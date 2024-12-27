import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import DetalleCotizacionTabla from './partials/DetalleCotizacionTabla';
import MenuDetalle from './partials/MenuDetalle';
import DialogDetalleCotizacion from './partials/DialogDetalleCotizacion';
import { useState } from 'react';

const detalleCaptura =({cotizacion}) => {    
    const [reloadList, setReloadList] = useState(false)
    const recargarListado = () =>{
        setReloadList(true)
    }

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
                            <DialogDetalleCotizacion cotizacion={cotizacion} modo={'Registrar'} recargarListado={recargarListado}/>
                        </div>
                    </div>
                    <DetalleCotizacionTabla cotizacion={cotizacion} reloadList={reloadList}  onRecargaCompleta={() => setReloadList(false)}/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;