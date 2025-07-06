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
import ExcelPersonalizador from './partials/ExcelPersonalizador';
        

const detalleCaptura =({cotizacion, detalle}) => {   
    
    const [vistraPreviaPDF, setVistraPreviaPDF] = useState(false)
    const [vistraPreviaExcel, setVistraPreviaExcel] = useState(false)
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
                            <h5>Folio: {detalle.folio}</h5>
                            <p>COMPAÑIA:{detalle?.cliente?.nombre}</p>
                            <p>Título: {detalle?.titulo}</p>
                        </div>   
                        
                        <div className="col-2 text-right">
                            <Button icon="pi pi-history" rounded severity="help" aria-label="Regresar Cotizaciones"  tooltip="Regresar Cotizaciones" tooltipOptions={{ position: 'left' }} onClick={() => window.location.href = route('cotizacion.show.index')}/>
                        </div>
                                        
                        <div className="col-3 text-right">
                            <DialogDetalleCotizacion  cotizacion={cotizacion} detalleItem={detalle} modo={'Registrar'} recargarListado={recargarListado}/>
                            <BusquedaConceptos  cotizacion={cotizacion} setReloadList={setReloadList}/>
                            <Button
                                severity="success"
                                size="small"
                                icon="pi pi-file-excel"
                                tooltip="Vista Previa Excel"
                                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                                className="p-button-rounded p-button-info p-button-sm mr-1"
                                onClick={() => setVistraPreviaExcel(true) }
                            />
                            <Button
                                severity="success"
                                size="small"
                                icon="pi pi-file-pdf"
                                tooltip="Vista Previa PDF"
                                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                                className="p-button-rounded p-button-info p-button-sm mr-1"
                                onClick={() => setVistraPreviaPDF(true)}
                            />
                            
                        </div>
                    </div>
                    <DetalleCotizacionTabla cotizacion={cotizacion} detalle={detalle} reloadList={reloadList}  onRecargaCompleta={() => setReloadList(false)}/>
                    <VistaPreviaCotizacion identyCotizacion={cotizacion} vistraPreviaPDF={vistraPreviaPDF} setVistraPreviaPDF={setVistraPreviaPDF}/>
                    <ExcelPersonalizador identyCotizacion={cotizacion} vistaPreviaExcel={vistraPreviaExcel} setVistaPreviaExcel={setVistraPreviaExcel}/>
                </div>
            </div>
        </Layout>
    );
    
}

export default detalleCaptura;