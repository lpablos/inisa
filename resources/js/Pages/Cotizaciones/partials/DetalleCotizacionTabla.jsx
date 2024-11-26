import React, { Component, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';

const  DetalleCotizacionTabla = () =>  {

   
    const [detalleCotizacion, setDetalleCotizacion] = useState([
        {
            pda:'1.01',
            descripcion:'SUMINISTRO E INSTALACIÓN DE LUMINARIA TIPO VAPOR FIXTURE DE 75 W, 100-305 VCA, 3H, 2F, 50-60 HZ; EL CUAL INCLUYE TRABAJOS REALIZADOS POR PERSONAL ESPECIALIZADO, EJECUCIÓN A UNA ELEVACIÓN A 3 M DE ALTURA, EQUIPO DE ELEVACIÓN, ESCALERAS Y TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS TRABAJOS A REALIZAR.',
            material_unidad:'PIEZA',	
            material_cantidad:'2',
            material_costo_unitario:'$5,260.00',
            material_subtotal:'$10,520.00',
            mano_obra_costo_unitario: '$2,500.00',

            mano_obra_subtotal:'$5,000.00',
            material_mano_obra_subtotal:'$15,520.00',
        },
        {
            pda:'1.01',
            descripcion:'SUMINISTRO E INSTALACIÓN DE LUMINARIA TIPO VAPOR FIXTURE DE 75 W, 100-305 VCA, 3H, 2F, 50-60 HZ; EL CUAL INCLUYE TRABAJOS REALIZADOS POR PERSONAL ESPECIALIZADO, EJECUCIÓN A UNA ELEVACIÓN A 3 M DE ALTURA, EQUIPO DE ELEVACIÓN, ESCALERAS Y TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS TRABAJOS A REALIZAR.',
            material_unidad:'PIEZA',	
            material_cantidad:'2',
            material_costo_unitario:'$5,260.00',
            material_subtotal:'$10,520.00',
            mano_obra_costo_unitario: '$2,500.00',

            mano_obra_subtotal:'$5,000.00',
            material_mano_obra_subtotal:'$15,520.00',
        },
        {
            pda:'1.01',
            descripcion:'SUMINISTRO E INSTALACIÓN DE LUMINARIA TIPO VAPOR FIXTURE DE 75 W, 100-305 VCA, 3H, 2F, 50-60 HZ; EL CUAL INCLUYE TRABAJOS REALIZADOS POR PERSONAL ESPECIALIZADO, EJECUCIÓN A UNA ELEVACIÓN A 3 M DE ALTURA, EQUIPO DE ELEVACIÓN, ESCALERAS Y TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS TRABAJOS A REALIZAR.',
            material_unidad:'PIEZA',	
            material_cantidad:'2',
            material_costo_unitario:'$5,260.00',
            material_subtotal:'$10,520.00',
            mano_obra_costo_unitario: '$2,500.00',

            mano_obra_subtotal:'$5,000.00',
            material_mano_obra_subtotal:'$15,520.00',
        },
        {
            pda:'1.01',
            descripcion:'SUMINISTRO E INSTALACIÓN DE LUMINARIA TIPO VAPOR FIXTURE DE 75 W, 100-305 VCA, 3H, 2F, 50-60 HZ; EL CUAL INCLUYE TRABAJOS REALIZADOS POR PERSONAL ESPECIALIZADO, EJECUCIÓN A UNA ELEVACIÓN A 3 M DE ALTURA, EQUIPO DE ELEVACIÓN, ESCALERAS Y TODO LO NECESARIO PARA LA CORRECTA EJECUCIÓN DE LOS TRABAJOS A REALIZAR.',
            material_unidad:'PIEZA',	
            material_cantidad:'2',
            material_costo_unitario:'$5,260.00',
            material_subtotal:'$10,520.00',
            mano_obra_costo_unitario: '$2,500.00',

            mano_obra_subtotal:'$5,000.00',
            material_mano_obra_subtotal:'$15,520.00',
        }

    ]);


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
            
            <DataTable value={detalleCotizacion} stripedRows size='small' paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
               
                <Column field="pda" header="PDA"></Column>
                <Column field="descripcion" header="Descripcion"></Column>
                <Column field="material_unidad" header="Material Unidad"></Column>
                <Column field="material_cantidad" header="Materia Cantidad"></Column>
                <Column field="material_subtotal" header="Material Subtotal"></Column>

                <Column field="mano_obra_costo_unitario" header="Mano Obra Costo Unitario"></Column>                
                <Column field="mano_obra_subtotal" header="Mano Obra Subtotal"></Column>

                <Column field="material_mano_obra_subtotal" header="Mterial/Mano Obra Subtotal"></Column>
                <Column header="Opciones" body={opcionesTemplate}></Column>
            </DataTable>
        </div>
    );
    
}

export default DetalleCotizacionTabla;