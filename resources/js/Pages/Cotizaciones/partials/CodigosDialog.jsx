import React, { Component, useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import axios from "axios";

const CodigosDialog = () => {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [codigo, setCodigo] = useState();
    const [descripcion, setDescripcion] = useState();
    const [fecha, setFecha] = useState(2351.35);
    const [products, setProducts] = useState([]);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirmacion = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };
    

    return (
        <div className="flex justify-content-center">
            <Toast ref={toast} />
            <ConfirmDialog />
            <Button label="Ampliar" size="small" icon="pi pi-paperclip" onClick={() => setVisible(true)} />
            <Dialog header="Códigos" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <>
                    <div className="card flex flex-wrap gap-4 p-fluid">
                        <div className="flex-auto">
                            <label htmlFor="integeronly" className="font-bold block mb-2">Código</label>
                            <InputText value={codigo} onValueChange={(e) => setCodigo(e.value)} />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="withoutgrouping" className="font-bold block mb-2">Descripción</label>
                            <InputText value={descripcion} onValueChange={(e) => setDescripcion(e.value)}/>
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="minmaxfraction" className="font-bold block mb-2">Fecha</label>
                            <Calendar value={fecha} onChange={(e) => setFecha(e.value)} />
                        </div>
                        <div className="flex-auto">
                            <Button onClick={()=>confirmacion()} icon="pi pi-check" label="Confirm" className="mt-4"></Button>
                        </div>
                   
                    </div>
                    <div className="card">
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </>
            </Dialog>
        </div>
    );
}

export default CodigosDialog;