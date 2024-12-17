import React, { Component, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormItemDetalle from './FormItemDetalle';

const DialogDetalleCotizacion = ({showDialog = false, cotizacion, modo='Registrar'}) => {
    const [visible, setVisible] = useState(false);
    const [iconoAccion, setIconoAccion] = useState('pi pi-pencil');
    const [tituloAccion, setTituloAccion] = useState('Registrar')
    
    
    
    useEffect(()=>{
        setVisible(showDialog);
    },[showDialog])
    useEffect(()=>{
        if(modo=='Registrar'){
            setIconoAccion('pi pi-pencil')
            setTituloAccion('Registrar un nuevo elemento')
        }
        if(modo=='Actualizar-Detalle'){
            setIconoAccion('pi pi-refresh')
            setTituloAccion('Actualizar un elemento')
        }
        if(modo=='Actualizar-Tomo'){
            setIconoAccion('pi pi-refresh')
            setTituloAccion('Actualizar un elemento')
        }

    },[modo])


    return (
          
        <>
            <Button icon={iconoAccion} rounded text severity="info" aria-label="User" onClick={() => setVisible(true)} />
            <Dialog header={tituloAccion} visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <FormItemDetalle cotizacion={cotizacion} modo={modo}/>     
            </Dialog>
        </>    
        
    );
    
}

export default DialogDetalleCotizacion;