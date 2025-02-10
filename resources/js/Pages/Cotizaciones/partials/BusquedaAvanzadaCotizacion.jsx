import React, { Component, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const BusquedaAvanzadaCotizacion = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-content-center ml-2">
            <Button 
                icon="pi pi-search-plus" 
                tooltip="Búsqueda avanzada" 
                tooltipOptions={{ showDelay: 100, hideDelay: 300 }} 
                rounded 
                onClick={() => setVisible(true)} />
            <Dialog header="Buscador Avanzado" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
               
            <div className="card">
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto">
                        <label htmlFor="Cotización" className="font-bold block mb-2">
                            Cotización
                        </label>
                        <InputText id="integer" keyfilter="int" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="Titulo" className="font-bold block mb-2">
                            Titulo
                        </label>
                        <InputText id="integer" keyfilter="int" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="Cliente" className="font-bold block mb-2">
                            Cliente
                        </label>
                        <InputText id="number" keyfilter="num" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto">
                        <label htmlFor="Estatus" className="font-bold block mb-2">
                            Estatus
                        </label>
                        <InputText id="hex" keyfilter="hex" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="Prioridad" className="font-bold block mb-2">
                            Prioridad
                        </label>
                        <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                    </div>                   
                </div>    
                <div className="flex flex-wrap justify-content-center gap-1">
                    <Button label="Buscar" severity="info" />
                </div>          
            </div>

            </Dialog>
        </div>
    );
    
}

export default BusquedaAvanzadaCotizacion;