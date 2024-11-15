import React, { Component, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ConceptoTabla = () => {
    const [products, setProducts] = useState([]);

    return (
        
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Costo"></Column>
            <Column field="code" header="Cantidad"></Column>
            <Column field="code" header="Fecha Entrega"></Column>
            <Column field="name" header="Condicion"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        
    );
    
}

export default ConceptoTabla;