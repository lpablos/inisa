import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function DialogoCat ({tpCatalogo}) {
    const [visible, setVisible] = useState(false);
    useEffect(()=>{
        switch (tpCatalogo) {
            case 'provedor':
                
                setVisible(true);
                break;
            case 'departamento':
            
                setVisible(true);
                break;
            case 'clientes':
            
                setVisible(true);
                break;
            case 'unidadesMedidas':
            
                setVisible(true);
                break;
            case 'provedor':
                
                setVisible(true);
                break;

            case 'usuarios':
            
                setVisible(true);
                break;
            case 'datosEmpresa':
            
                setVisible(true);
                break;
        
            default:
                    setVisible(false);
                break;
        }
    },[tpCatalogo])
    return (
        <div className="card flex justify-content-center">
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    );
    
}
