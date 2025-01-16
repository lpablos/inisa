import React, { Component, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import TableConceptosGral from './TableConceptosGral';
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from 'primereact/progressspinner';
        

const BusquedaConceptos = () => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    return (
        <>
            <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" tooltip="Busqueda Conceptos" tooltipOptions={{ position: 'left' }} onClick={() => setVisible(true)}/>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Busqueda de Conceptos" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <div className="flex justify-content-center m-4">
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="flex justify-content-center m-4">
                    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
                <TableConceptosGral/>
            </Dialog>
        </>
        
    );
    
}

export default BusquedaConceptos;