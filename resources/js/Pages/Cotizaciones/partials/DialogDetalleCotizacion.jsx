import React, { Component, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormItemDetalle from './FormItemDetalle';

const DialogDetalleCotizacion = ({cotizacion}) => {
    const [visible, setVisible] = useState(false);
    const [iconoAccion, setIconoAccion] = useState('pi pi-pencil');
    const [tituloAccion, setTituloAccion] = useState('Registrar')
    
    
    
 
    useEffect(()=>{
        setIconoAccion('pi pi-pencil')
        setTituloAccion('Registrar un nuevo elemento')
    },[])


    return (
          
        <>
            <Button icon={iconoAccion} rounded text severity="info" aria-label="User" onClick={() => setVisible(true)} />
            <Dialog header={tituloAccion} visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <FormItemDetalle cotizacion={cotizacion}/>     
            </Dialog>
        </>    
        
    );
    
}

export default DialogDetalleCotizacion;