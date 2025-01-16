import React, { Component, useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
};

const cellStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    verticalAlign: 'middle',
};

const headerStyles = {
    ...cellStyles,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
};

const yellowRowStyles = {
    backgroundColor: '#fffbeb',
};

const TableConceptosGral = () => {
    const [checked, setChecked] = useState(false);
    
    return (
        <>
        <table style={tableStyles}>
            <thead>
                <th style={headerStyles}>check</th>
                <th style={headerStyles}>Descripcion</th>
                <th style={headerStyles}>Material Unidad</th>
                <th style={headerStyles}>Materia Cantidad</th>
                <th style={headerStyles}>Material Subtotal</th>
                <th style={headerStyles}>Mano Obra Costo Unitario</th>
                <th style={headerStyles}>Mano Obra Subtotal</th>
                <th style={headerStyles}>Material/Mano Obra Subtotal</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex justify-content-center">
                            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
                        </div>
                    </td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                </tr>
                <tr>
                    <td>
                        <div className="flex justify-content-center">
                            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
                        </div>
                    </td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                </tr>
            </tbody>
        </table>
        
            
        </>
    );
    
}

export default TableConceptosGral;