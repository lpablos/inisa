import React, { Component, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormItemDetalle from './FormItemDetalle';

const DialogDetalleCotizacion = ({showDialog = false}) => {
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        setVisible(showDialog);
    },[showDialog])

    return (
          
        <>
            
            <Button icon="pi pi-pencil" rounded text severity="info" aria-label="User" onClick={() => setVisible(true)} />
            <Dialog header="Descripcion del elemento" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <FormItemDetalle/>     
            </Dialog>
        </>    
        
    );
    
}

export default DialogDetalleCotizacion;