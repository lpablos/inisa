import React, { Component, useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';
import DialogDetalleCotizacion from './DialogDetalleCotizacion';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

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

const  DetalleCotizacionTabla = ({cotizacion, reloadList, onRecargaCompleta}) =>  {
    
    const toast = useRef(null);
    const [detalleCotizacion, setDetalleCotizacion] = useState([]);

    useEffect(async()=>{
        getListadoDetalleCotizacionFactura();
    },[])

    useEffect(()=>{
        if(reloadList){
            getListadoDetalleCotizacionFactura();
            onRecargaCompleta()
        }
    },[reloadList])



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

    const [DetalleModal, setDetalleModal] = useState()
    const [showModalAccion, setShowModalAccion] = useState(false)
    const modalUpdate = (detalle) =>{        
        setDetalleModal(detalle);
        setShowModalAccion(true)       
    }

  
    const recargarListado = () =>{        
        getListadoDetalleCotizacionFactura()
    }

    const preguntaEliminacion = (item) => {
        console.log("Esto entra", item);
        let mensaje
        if(item.es_tomo == 1){
            mensaje = `Al eliminar el tomo con el PDA "${item.PDA}", ten en cuenta que se se eliminarán automáticamente todos los elementos internos relacionados (por ejemplo, 1.01, 1.02, entre otros).`
        }else{
            mensaje = `Se eliminar el PDA "${item.PDA}", con la descripción: ${item.descripcion}.`
        }
        
        
        confirmDialog({
            message: `${mensaje}`,
            header: `Confirmacion de eliminación`,
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: ()=>acceptDeleteDetalle(item.id),
            reject
        });
    };

    const acceptDeleteDetalle = async (identy) => {
   
        try {
            await axios.delete(
                `${route("tomo.detalle.elimina.identy", { id: identy })}`
            );
            toast.current.show({
                severity: "success",
                summary: "Eliminado correctamente",
                detail: "El detalle fue eliminado exitosamente.",
                life: 3000,
            });
            
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se pudo eliminar el detalle.",
                life: 3000,
            });
        }
        
        
    }

    const reject = () => {
        toast.current.show({ severity: 'contrast', summary: 'Correcto', detail: 'Intenta con otro elemento de la lista', life: 3000 });
    }
  
    
    return (
        
        <div className="card">
             <Toast ref={toast} />
             <ConfirmDialog />
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
                                    <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                    <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
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
                                    
                                    <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                    <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
                                </td>
                            </tr>
                        )  
                    ))}
                </tbody>
            </table>
            <DialogDetalleCotizacion 
                cotizacion={cotizacion} 
                // para el detalle
                detalle={DetalleModal} 
                showModalAccion={showModalAccion} 
                showbtn={false}
                eventoVisible={setShowModalAccion}
                recargarListado={recargarListado}
            />
        </div>
    );
    
}

export default DetalleCotizacionTabla;