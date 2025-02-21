import React,{useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from "primereact/inputswitch";


const VistaPreviaCotizacion = ({identyCotizacion=1,vistraPreviaPDF, setVistraPreviaPDF}) => {
    
    const [encabezado, setEncabezado] = useState(false);
    const [piePagina, setpiePagina] = useState(false);
    const [firma, setFirma] = useState(false);
    
    const [visible, setVisible] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null)

    const [load, setLoad]= useState(false)
    useEffect(() => {
        setPdfUrl(null)
        setLoad(false)
        resetOpt()
        
        setVisible(vistraPreviaPDF);
    }, [vistraPreviaPDF]);

    const resetOpt = ()=>{
        setEncabezado(false)
        setpiePagina(false)
        setFirma(false)
        
    }

    const generarPdf = () =>{
        setLoad(true)
        setTimeout(() => {
            const pdfUrl = `${route("exportar.pdf.cotizacion")}?id=${identyCotizacion}&encabezado=${encabezado}&pie-pagina=${piePagina}&firma=${firma}`;
            console.log("Esta es la url", pdfUrl);
            
            setTimeout(() => {
                // Se comenta para posterior llamar al correcto
                // setPdfUrl(pdfUrl)
                setPdfUrl('https://www.soundczech.cz/temp/lorem-ipsum.pdf')
                setLoad(false);
            }, 1000);                
        }, 1000);

    }


    return (
        <>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Vista Previa Cotización" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVistraPreviaPDF(false); }}>
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
                        <Button label="Generar PDF" iconPos="right" onClick={()=>generarPdf()} disabled={load}/>
                    </div>
                </div>
                {load && (
                     <div className="flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                )}
                {pdfUrl!==null && (
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                        title="Vista Previa Cotización"
                    />
                )}
                
            </Dialog>
        </>

    );

}

export default VistaPreviaCotizacion;
