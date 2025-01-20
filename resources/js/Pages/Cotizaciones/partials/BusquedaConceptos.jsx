import React, { Component, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import TableConceptosGral from './TableConceptosGral';
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from "axios";
        

const BusquedaConceptos = () => {
    const [visible, setVisible] = useState(false);
    const [concepto, setConcepto] = useState('');
    const [loader, setLoader] = useState(false);
    const [registros, setRegistros]= useState([])
    const [numeroRegistros, setNumeroRegistros]= useState(0)


    const busquedaGeneralConcepto = async () =>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
        try {
            const response = await axios.post(`${route("buscador.general.concepto")}`,{'concepto':concepto});
            if (response.status === 200) {
                const {data, mensaje, registros} = response
                setRegistros(data)
                setNumeroRegistros(registros);
            }
            
        } catch (error) {
            console.log("Este dato ", error);
            
            alert("Error")
        }
    }
    // buscador.general.concepto

    return (
        <>
            <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" tooltip="Busqueda Conceptos" tooltipOptions={{ position: 'left' }} onClick={() => setVisible(true)}/>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Busqueda de Conceptos" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <div className="flex justify-content-center m-4">
                    <div className="p-inputgroup flex-1">
                        <InputText placeholder="Concepto" className="p-inputtext-lg" value={concepto} onChange={((event)=>setConcepto(event.target.value))}/>
                        <Button icon="pi pi-search" onClick={()=>busquedaGeneralConcepto()}/>
                    </div> 
                </div>
                {loader && (
                    <div className="flex justify-content-center m-4">
                        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                    </div>
                )}
                {loader == false &&(
                    <TableConceptosGral/>
                )}
            </Dialog>
        </>
        
    );
    
}

export default BusquedaConceptos;