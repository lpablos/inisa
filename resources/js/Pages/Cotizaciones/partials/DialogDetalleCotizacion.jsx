import React, { Component, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FormItemDetalle from './FormItemDetalle';
import { Tooltip } from 'primereact/tooltip';
        

const DialogDetalleCotizacion = ({cotizacion, detalle, showModalAccion=false, showbtn=true, eventoVisible, recargarListado, detalleItem}) => {
    
    
    
    
    const [visible, setVisible] = useState(false);
    const [iconoAccion, setIconoAccion] = useState('pi pi-pencil');
    const [tituloAccion, setTituloAccion] = useState('Registrar')
    const [mostrarAccion, setMostrarAccion] = useState(true)
    
    
    
 
    useEffect(()=>{
        setIconoAccion('pi pi-pencil')
        setTituloAccion('Registrar Concepto')
    },[])

    useEffect(()=>{setMostrarAccion(showbtn)},[showbtn])

    useEffect(()=>{
        if(showModalAccion == true){
            setVisible(showModalAccion)
        }else{
            setVisible(showModalAccion)
        }
    },[showModalAccion])

    useEffect(()=>{
        if (visible === false && typeof eventoVisible === "function") {
            eventoVisible(false);
        }
    
    },[visible])

    const ocultarModal = () =>{
        setVisible(false)  
        recargarListado()      
    }


    return (
          
        <>
            {mostrarAccion && <Button icon={iconoAccion} rounded text severity="info" aria-label="User" onClick={() => setVisible(true)}  tooltip="Nuevo Concepto" tooltipOptions={{ position: 'left' }} />}
            <Dialog header={tituloAccion} visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <FormItemDetalle cotizacion={cotizacion} detalle={detalle} detalleItem={detalleItem} modalVisible={ocultarModal}/>     
            </Dialog>
        </>    
        
    );
    
}

export default DialogDetalleCotizacion;