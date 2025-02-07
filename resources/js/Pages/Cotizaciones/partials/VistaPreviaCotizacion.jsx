import React,{useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';


const VistaPreviaCotizacion = ({identyCotizacion=1,vistraPreviaPDF, setVistraPreviaPDF}) => {
    console.log("Cotizacion prueba", identyCotizacion);
    
    const [visible, setVisible] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null)
    useEffect(() => {
        setVisible(vistraPreviaPDF);
    }, [vistraPreviaPDF]);

    useEffect(()=>{
        if(visible){
            setTimeout(() => {
                const pdfUrl = `${route("exportar.pdf.cotizacion", { id: identyCotizacion })}`;
                setTimeout(() => {
                    setPdfUrl(pdfUrl)
                }, 1000);                
            }, 1000);
        }else{
            setPdfUrl(null)
        }
    },[visible])


    return (
        <>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Vista Previa Cotización" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVistraPreviaPDF(false); }}>
                <p className="m-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                {!pdfUrl && (
                     <div className="flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                )}
                {pdfUrl && (
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
