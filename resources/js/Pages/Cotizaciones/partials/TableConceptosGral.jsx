import React, { Component, useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';

const TableConceptosGral = () => {
    

    const [checked, setChecked] = useState(false);
    const [products, setProducts] = useState([]);
    const [sizeOptions] = useState([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);
    const [size, setSize] = useState(sizeOptions[1].value);
    useEffect(() => {
        console.log("Aqui");
        
    }, []);

     const accionesTemplate = (rowData) => (
            <div className="flex gap-2">
                <Button
                    severity="success"
                    size="small"
                    icon="pi pi-file-excel"
                    tooltip="Vista Previa Excel"
                    tooltipOptions={{ position: "bottom", showDelay: 200, hideDelay: 300 }}
                    className="p-button-rounded p-button-info p-button-sm"
                    onClick={() => handleExportClick(rowData.id) }
                />
            </div>
        );
    return (
        
        <div className="card">
            <DataTable value={products} size={size} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Descripción"></Column>
                <Column field="name" header="Material"></Column>
                <Column field="category" header="Mano de Obra"></Column>
                <Column field="quantity" header="Quantity" body={accionesTemplate}></Column>
            </DataTable>
        </div>
        
            
        
    );
    
}

export default TableConceptosGral;