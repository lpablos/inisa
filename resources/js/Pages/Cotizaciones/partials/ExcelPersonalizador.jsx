import React, { Component, useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputSwitch } from "primereact/inputswitch";
import { Inertia } from '@inertiajs/inertia';

const ExcelPersonalizador = ({identyCotizacion =1, vistaPreviaExcel=false, setVistaPreviaExcel}) =>{
    const [visible, setVisible] = useState(false);

    const [encabezado, setEncabezado] = useState(false);
    const [piePagina, setpiePagina] = useState(false);
    const [firma, setFirma] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [load, setLoad]= useState(false)

    useEffect(() => {
        
        
        setPdfUrl(null)
        setLoad(false)
        resetOpt()        
        setVisible(vistaPreviaExcel);
    }, [vistaPreviaExcel]);

   

    const resetOpt = ()=>{
        setEncabezado(false)
        setpiePagina(false)
        setFirma(false)
        
    }

    const generarExcel = () =>{
        setPdfUrl(null)
        setLoad(true)
        const url = `${route("exportar.excel.cotizacion")}?id=${identyCotizacion}&encabezado=${encabezado}&pie-pagina=${piePagina}&firma=${firma}`;
        setTimeout(() => {
            Inertia.visit(url, { method: 'get' }); // Realiza la navegación.
        }, 1000);
    }

    return (
        <Dialog header="Descargar Excel Cotización" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVistaPreviaExcel(false); }}>

            <div className="card flex flex-wrap gap-4 p-fluid">
                <div className="flex-auto text-center">
                    <label htmlFor="mile" className="font-bold block mb-2">Agregar encabezados</label>
                    <InputSwitch checked={encabezado} onChange={(e) => setEncabezado(e.value)} /> <span>{encabezado?'SI':'NO'}</span>
                </div>
                <div className="flex-auto text-center">
                    <label htmlFor="percent" className="font-bold block mb-2">Agregar Pie de Pagina</label>
                    <InputSwitch checked={piePagina} onChange={(e) => setpiePagina(e.value)} />{piePagina?'SI':'NO'}
                </div>
                <div className="flex-auto text-center">
                    <label htmlFor="expiry" className="font-bold block mb-2">Agregar Firma</label>
                    <InputSwitch checked={firma} onChange={(e) => setFirma(e.value)} />{firma?'SI':'NO'}
                </div>
                <div className="flex-auto">
                    <Button label="Generar PDF" iconPos="right" onClick={()=>generarExcel()} disabled={load}/>
                </div>
            </div>
            {load && (
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            )}
         
        </Dialog>
    );
    
}

export default ExcelPersonalizador;