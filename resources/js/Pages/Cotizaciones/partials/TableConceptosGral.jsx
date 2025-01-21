import React, { Component, useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

const TableConceptosGral = ({listadoConceptos = [], totalesAsc=0}) => {
    const [conceptos, setConceptos] = useState([]);
    const [totales, setTotales] = useState([]);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const buttonEl = useRef(null);
    
   
    useEffect(() => {
        setConceptos(listadoConceptos)
        setTotales(totalesAsc)
    }, [listadoConceptos]);

    const validacionConcepto = (dato) =>{
        // aqui falta enviarlos a la funcion nueva
        console.log("esto", dato);
        setVisible(true)
    }

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const accionesTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button
                severity="success"
                size="small"
                icon="pi pi-check-circle"
                tooltip="Agregar"
                tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                className="p-button-rounded p-button-info p-button-sm"
                onClick={() => validacionConcepto(rowData) }
            />
        </div>
    );

    const detalleMaterial = (rowData)=>{
        return (
            <ul>
                <li><strong>Cantidad :</strong>{rowData.costo_material_cantidad}</li>
                <li><strong>Costo Sugerido :</strong>{rowData.costo_material_unitario_sugerido.toFixed(2)} {rowData.moneda}</li>
                <li><strong>Costo :</strong>{rowData.costo_material_unitario.toFixed(2)} {rowData.moneda}</li>
                <li><strong>Costo Subtotal :</strong>{rowData.costo_material_subtotal.toFixed(2)} {rowData.moneda}</li>
            </ul>
        );
    }
    const detalleManoObra = (rowData)=>{
        return (
            <ul>
                <li><strong>Costo Unitario Sugerido :</strong>{rowData.costo_mano_obra_unitario_sugerido.toFixed(2)} {rowData.moneda}</li>
                <li><strong>Costo Unitario :</strong>{rowData.costo_mano_obra_unitario.toFixed(2)} {rowData.moneda}</li>
                <li><strong>Subtotal :</strong>{rowData.costo_mano_obra_unitario_sugerido.toFixed(2)} {rowData.moneda}</li>
                <li><strong>M.O./MATER. Subtotal:</strong>{rowData.obra_material_subtotal.toFixed(2)} {rowData.moneda}</li>
            </ul>
        );
    }
    return (
        <>
            <div className="card">
                <DataTable value={conceptos} size={'small'} paginator rows={5}>
                    <Column field="descripcion" header="Descripción"  style={{ width: '50%' }}></Column>
                    <Column field="name" header="Material" body={detalleMaterial}></Column>
                    <Column field="category" header="Mano de Obra" body={detalleManoObra}></Column>
                    <Column field="opciones" header="Opción" body={accionesTemplate}></Column>
                </DataTable>
                <div className="flex justify-content-center">
                    <Toast ref={toast} />
                    <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                        message="¿Estas seguro de agregarlo ?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />                    
                </div>
            </div>
        </>
        
            
        
    );
    
}

export default TableConceptosGral;