import React, { Component, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';

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

const  DetalleCotizacionTabla = ({cotizacion}) =>  {
    
    
    const [detalleCotizacion, setDetalleCotizacion] = useState([]);

    useEffect(async()=>{
        getListadoDetalleCotizacionFactura();
    },[])


    const getListadoDetalleCotizacionFactura = async() =>{
        await axios
        .get(`${route("cotizacion.list.detalle.cotizacion", { identy: cotizacion })}`)
        .then((response) => {
            const {data, status } = response       
            if(status == 200){
                console.log("Aqui es", data);                
                setDetalleCotizacion(data)
            }
        });
    }


    const opcionesTemplate = (registros) => {
        return (
           <>
            <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" />
            <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" />
           </>
        );
    };
    
    return (
        <div className="card">
            <table style={tableStyles}>
                <thead>
                    <tr>
                        <th style={headerStyles}>PDA</th>
                        <th style={headerStyles}>Descripcion</th>
                        <th style={headerStyles}>Material Unidad</th>
                        <th style={headerStyles}>Materia Cantidad</th>
                        <th style={headerStyles}>Material Subtotal</th>
                        <th style={headerStyles}>Mano Obra Costo Unitario</th>
                        <th style={headerStyles}>Mano Obra Subtotal</th>
                        <th style={headerStyles}>Material/Mano Obra Subtotal</th>
                        <th style={headerStyles}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {detalleCotizacion.map((item)=>(
                        item.es_tomo ===1 ? (
                            
                            <tr key={item.id} style={yellowRowStyles}>
                                <td style={cellStyles}>{item.PDA}</td>
                                <td colSpan={7} style={cellStyles}> <h7>{item.descripcion}</h7></td>
                                <td style={cellStyles}>
                                    <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" />
                                    <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" />
                                </td>
                                
                            </tr>
                            
                        ):(
                            
                            <tr key={item.id}>
                                <td style={cellStyles}>{item.PDA}</td>
                                <td style={cellStyles}>{item.descripcion}</td>
                                <td style={cellStyles}>{item.costo_material_cantidad}</td>
                                <td style={cellStyles}>{item.costo_material_unitario}</td>
                                <td style={cellStyles}>{item.costo_material_subtotal}</td>
                                <td style={cellStyles}>{item.costo_mano_obra_unitario}</td>
                                <td style={cellStyles}>{item.costo_mano_obra_subtotal}</td>
                                <td style={cellStyles}>{item.obra_material_subtotal}</td>
                                <td style={cellStyles}>
                                    <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" />
                                    <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" />
                                </td>
                                
                            </tr>
                        )
                         
                    ))}
                    <tr>
                      
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default DetalleCotizacionTabla;