import React, { Component, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const DialogDetalleCotizacion = ({showDialog = false}) => {
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        setVisible(showDialog);
    },[showDialog])

    return (
          
        <>
            
            <Button icon="pi pi-pencil" rounded text severity="info" aria-label="User" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>               
            </Dialog>
        </>    
        
    );
    
}

export default DialogDetalleCotizacion;