import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import DetalleCotizacionTabla from './partials/DetalleCotizacionTabla';
import MenuDetalle from './partials/MenuDetalle';
import DialogDetalleCotizacion from './partials/DialogDetalleCotizacion';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
        

const detalleCaptura =({cotizacion, detalle}) => {    
    const [reloadList, setReloadList] = useState(false)
    const recargarListado = () =>{
        setReloadList(true)
    }

    return (
        <Layout>
            <div className="grid">
                <div className="card col-12">
                    <div className="grid m-1">
                        <div className="col-10 text-center">
                            <h3>Detalle de la cotización</h3>

                        </div>  
                        <div className="col-2 text-right">
                            <Button icon="pi pi-history" rounded text severity="info" aria-label="Regresar Cotizaciones"  tooltip="Regresar Cotizaciones" tooltipOptions={{ position: 'left' }} onClick={() => window.location.href = route('cotizacion.show.index')}/>
                        </div>
                        <div className="col-10 text-center">
                            <p>COMPAÑIA:{detalle?.cliente?.nombre}</p>
                            <p>Título: {detalle?.titulo}</p>
                        </div>                      
                        <div className="col-2 text-right">
                            <DialogDetalleCotizacion cotizacion={cotizacion} detalleItem={detalle} modo={'Registrar'} recargarListado={recargarListado}/>
                            <Button icon="pi pi-images" rounded text severity="info" aria-label="Vista Previa"  tooltip="Vista Previa" tooltipOptions={{ position: 'left' }}/>
                        </div>
                    </div>
                    <DetalleCotizacionTabla cotizacion={cotizacion} detalle={detalle} reloadList={reloadList}  onRecargaCompleta={() => setReloadList(false)}/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;