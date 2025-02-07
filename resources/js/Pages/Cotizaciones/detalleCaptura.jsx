import Layout from '@/Layouts/layout/layout';
import React, { Component } from 'react';
import DetalleCotizacionTabla from './partials/DetalleCotizacionTabla';
import MenuDetalle from './partials/MenuDetalle';
import DialogDetalleCotizacion from './partials/DialogDetalleCotizacion';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import BusquedaConceptos from './partials/BusquedaConceptos';
import { Inertia } from '@inertiajs/inertia';
import VistaPreviaCotizacion from './partials/VistaPreviaCotizacion';
        

const detalleCaptura =({cotizacion, detalle}) => {   
    
    const [vistraPreviaPDF, setVistraPreviaPDF] = useState(false)
    const [reloadList, setReloadList] = useState(false)
    const recargarListado = () =>{
        setReloadList(true)
    }

    const handleExportClick = (id) => {
    
        const url = `${route("exportar.excel.cotizacion", { id: 1 })}`;
        console.log("Este es la ruta", url);
        setTimeout(() => {
            Inertia.visit(url, { method: 'get' }); // Realiza la navegación.
        }, 1000);
        
    };

    return (
        <Layout>
            <div className="grid">
                <div className="card col-12">
                    <div className="grid m-1">
                        <div className="col-10 text-center">
                            <h3>Detalle de la cotización</h3>

                        </div>  
                        <div className="col-2 text-right">
                            <Button icon="pi pi-history" rounded severity="help" aria-label="Regresar Cotizaciones"  tooltip="Regresar Cotizaciones" tooltipOptions={{ position: 'left' }} onClick={() => window.location.href = route('cotizacion.show.index')}/>
                        </div>
                        <div className="col-9 text-center">
                            <p>COMPAÑIA:{detalle?.cliente?.nombre}</p>
                            <p>Título: {detalle?.titulo}</p>
                        </div>                      
                        <div className="col-3 text-right">
                            <BusquedaConceptos cotizacion={cotizacion} setReloadList={setReloadList}/>
                            <DialogDetalleCotizacion cotizacion={cotizacion} detalleItem={detalle} modo={'Registrar'} recargarListado={recargarListado}/>
                             <Button
                                severity="success"
                                size="small"
                                icon="pi pi-file-excel"
                                tooltip="Vista Previa Excel"
                                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                                className="p-button-rounded p-button-info p-button-sm"
                                onClick={() => handleExportClick(cotizacion) }
                            />
                            <Button
                                severity="success"
                                size="small"
                                icon="pi pi-file-pdf"
                                tooltip="Vista Previa PDF"
                                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                                className="p-button-rounded p-button-info p-button-sm"
                                onClick={() => setVistraPreviaPDF(true)}
                            />
                            {/* <Button icon="pi pi-file-pdf" rounded text severity="info" aria-label="Vista Previa"  tooltip="Vista Previa PDF" tooltipOptions={{ position: 'left' }} onClick={()=>{alert('En desarrollo')}}/> */}
                        </div>
                    </div>
                    <DetalleCotizacionTabla cotizacion={cotizacion} detalle={detalle} reloadList={reloadList}  onRecargaCompleta={() => setReloadList(false)}/>
                    <VistaPreviaCotizacion identyCotizacion={cotizacion} vistraPreviaPDF={vistraPreviaPDF} setVistraPreviaPDF={setVistraPreviaPDF}/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;