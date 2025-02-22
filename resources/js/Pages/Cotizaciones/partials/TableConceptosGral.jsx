import React, { Component, useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import axios from "axios";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import DOMPurify from "dompurify";

const TableConceptosGral = ({listadoConceptos = [], totalesAsc=0,seleccionTomo,perteneceTomo,capturaTomo,identyCotizacion, setVisibleModal, setConceptoInput, setReloadList, setRegistros}) => {
    const [conceptos, setConceptos] = useState([]);
    const [totales, setTotales] = useState([]);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    
    const [selecTomo, setSelecTomo] = useState(null);
    const [pertTomo, setPertTomo] = useState(null);
    const [captTomo, setCaptTomo] = useState(null);
    const [idConcepto, setIdConcepto] = useState(null)
    const [idCotiza, setIdCotiza] = useState(null)
    // const []
    
   
    useEffect(() => {
        setConceptos(listadoConceptos)
        setTotales(totalesAsc)
    }, [listadoConceptos]);
    
    useEffect(()=>{
        setSelecTomo(seleccionTomo)
        setPertTomo(perteneceTomo)
        setCaptTomo(capturaTomo)
        setIdCotiza(identyCotizacion)
    },[seleccionTomo,perteneceTomo,capturaTomo, identyCotizacion])

    const validacionConcepto = (dato) =>{
        const{id}= dato;
        setIdConcepto(id);
        setVisible(true)
    }

    const resetForm = () =>{
        setConceptoInput('')
        setConceptos([])
        setRegistros([])
    }

    const asociarConcepto = async () =>{
        try {
            const datos = {
                'identyCotizacion' : idCotiza,
                'identyConcepto' : idConcepto,
                'selecTomo' : selecTomo,
                'pertTomo' : pertTomo,
                'captTomo' : captTomo,
            }
            const response = await axios.post(  `${route("asociar.concepto.generales")}`,datos)
            const {data,success} = response.data
            if(response.status == 201){
                resetForm()
                setReloadList(true)
                toast.current.show({ severity: 'info', summary: 'Confirmed', detail:  `${success}`, life: 3000 });
                setTimeout(() => {
                    setVisibleModal(false);    
                }, 3500);
            }
            console.log("Esta es la respues", response);
            
        } catch (error) {
            // console.log("Este es el errror", error);
            
            alert("Error")
        }
    }

    const accept = () => {
        asociarConcepto()
        // resetForm()
        // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        // setTimeout(() => {
        //     setVisibleModal(false);    
        // }, 3500);

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
                {rowData.costo_material_cantidad && (
                    <li>
                    <strong>Cantidad:</strong> {rowData.costo_material_cantidad}
                    </li>
                )}
                {rowData.costo_material_unitario_sugerido && (
                    <li>
                    <strong>Costo Sugerido:</strong> {rowData.costo_material_unitario_sugerido.toFixed(2)} {rowData.moneda}
                    </li>
                )}
                {rowData.costo_material_unitario && (
                    <li>
                    <strong>Costo:</strong> {rowData.costo_material_unitario.toFixed(2)} {rowData.moneda}
                    </li>
                )}
                {rowData.costo_material_subtotal && (
                    <li>
                    <strong>Costo Subtotal:</strong> {rowData.costo_material_subtotal.toFixed(2)} {rowData.moneda}
                    </li>
                )}
            </ul>
        );
    }
    const detalleManoObra = (rowData)=>{
        return (
            <ul>
                {rowData.costo_mano_obra_unitario_sugerido && (
                    <li>
                    <strong>Costo Unitario Sugerido:</strong> {rowData.costo_mano_obra_unitario_sugerido.toFixed(2)} {rowData.moneda}
                    </li>
                )}
                {rowData.costo_mano_obra_unitario && (
                    <li>
                    <strong>Costo Unitario:</strong> {rowData.costo_mano_obra_unitario.toFixed(2)} {rowData.moneda}
                    </li>
                )}
                {rowData.costo_mano_obra_unitario_sugerido && (
                    <li>
                    <strong>Subtotal:</strong> {rowData.costo_mano_obra_unitario_sugerido.toFixed(2)} {rowData.moneda}
                    </li>
                )}
                {rowData.obra_material_subtotal && (
                    <li>
                    <strong>M.O./MATER. Subtotal:</strong> {rowData.obra_material_subtotal.toFixed(2)} {rowData.moneda}
                    </li>
                )}
            </ul>
        );
    }

    const detalleDescripcion = (rowData)=>{
        return (
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rowData.descripcion) }} />
        );
    }
    return (
        <>
            <div className="card">
                <DataTable value={conceptos} size={'small'} paginator rows={5}>
                    {/* <Column field="descripcion" header="Descripción"  style={{ width: '50%' }}></Column> */}
                    <Column field="descripcion" header="Descripción"  style={{ width: '50%' }} body={detalleDescripcion}></Column>
                    <Column field="name" header="Material" body={detalleMaterial}></Column>
                    <Column field="category" header="Mano de Obra" body={detalleManoObra}></Column>
                    <Column field="opciones" header="Opción" body={accionesTemplate}></Column>
                </DataTable>
                <Toast ref={toast} />
                <ConfirmDialog
                    group="declarative"
                    visible={visible}
                    onHide={() => setVisible(false)}
                    message="¿Estas seguro de agregar este concepto?"
                    header="Confirmación"
                    icon="pi pi-exclamation-triangle"
                    accept={accept}
                    reject={reject}
                    breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
                />
            </div>
        </>
        
            
        
    );
    
}

export default TableConceptosGral;