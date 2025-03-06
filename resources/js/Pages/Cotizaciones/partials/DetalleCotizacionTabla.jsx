import React, { Component, useEffect, useState, useRef } from 'react';
import { Button } from 'primereact/button';
import DialogDetalleCotizacion from './DialogDetalleCotizacion';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { SplitButton } from 'primereact/splitbutton';
import DOMPurify from "dompurify";

import { ProgressSpinner } from 'primereact/progressspinner';
        

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

const  DetalleCotizacionTabla = ({cotizacion, detalle, reloadList, onRecargaCompleta}) =>  {
    
    
    const toast = useRef(null);
    const [detalleCotizacion, setDetalleCotizacion] = useState([]);
    const [loadingImg, setLoadingImg] = useState(false);

    useEffect(async()=>{
        async function fetchData() {
            getListadoDetalleCotizacionFactura();
        }
        fetchData()
    },[])

    useEffect(()=>{
        if(reloadList){
            async function fetchData2() {
                getListadoDetalleCotizacionFactura();
                onRecargaCompleta()
            }
            fetchData2()
           
        }
    },[reloadList])



    const getListadoDetalleCotizacionFactura = async() =>{
        setLoadingImg(true)
        await axios
        .get(`${route("cotizacion.list.detalle.cotizacion", { identy: cotizacion })}`)
        .then((response) => {
            const {data, status } = response       
            if(status == 200){   
                setTimeout(() => {
                    setDetalleCotizacion(data)
                    setLoadingImg(false)    
                }, 1000);     
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
        let valor= item.PDA.replace(/<[^>]*>/g, '');
        let sinEtiquetasDesc = item.descripcion.replace(/<[^>]*>/g, '');
        let mensaje
        if(item.es_tomo == 1){
            mensaje = `Al eliminar el tomo con el PDA "${valor}", ten en cuenta que se se eliminarán automáticamente todos los elementos internos relacionados (por ejemplo, 1.01, 1.02, entre otros).`
        }else{
            mensaje = `Se eliminar el PDA "${valor}", con la descripción: ${sinEtiquetasDesc}.`
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
            setTimeout(() => {
                getListadoDetalleCotizacionFactura();
                onRecargaCompleta()
            }, 1000);
            
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

    const [totalDetalle, setTotalDetalle] = useState(0);

   
    useEffect(()=>{
        if (Array.isArray(detalleCotizacion) && detalle.es_material == 1) {
            calcularTotalMaterial()
        }

        if (Array.isArray(detalleCotizacion) && detalle.es_mano_obra == 1) {
            calcularTotalManoObra()
        }        
    },[detalleCotizacion])

    const calcularTotalMaterial = () => {
        const sumaMaterial = detalleCotizacion
                .filter(item => item.es_tomo === 0)
                .reduce((acc, item) => acc + (item.costo_material_subtotal || 0), 0);  
        setTotalDetalle(sumaMaterial);        
    };

    const calcularTotalManoObra = () => {
        const sumaMaterial = detalleCotizacion
                .filter(item => item.es_tomo === 0)
                .reduce((acc, item) => acc + (item.obra_material_subtotal || 0), 0);  
        setTotalDetalle(sumaMaterial);        
    };

    const formatCurrency = (value) => {
        return `$${parseFloat(value).toFixed(2)}`;
    };

   
    const endContent = (
        <React.Fragment>
            Total : { `${formatCurrency(totalDetalle).toLocaleString()} ${detalle.moneda.abreviacion} `}
        </React.Fragment>
    );

    function stripTags(html) {
        const temporalElement = document.createElement("div");
        temporalElement.innerHTML = html;
        return temporalElement.textContent || temporalElement.innerText || "";
    }
    
    return (
        
        <div className="card">
            {loadingImg && (
                <div className="card flex justify-content-center">
                    <ProgressSpinner />
                </div>
            )}
             <Toast ref={toast} />
             <ConfirmDialog />
             {loadingImg == false && (
                <table style={tableStyles}>
                    <thead>
                        {detalle.es_material==1 && (
                            <tr>
                                <th style={headerStyles}>PDA</th>
                                <th style={headerStyles}>Descripcion</th>
                                <th style={headerStyles}>Material Unidad</th>
                                <th style={headerStyles}>Materia Cantidad</th>
                                <th style={headerStyles}>Material Subtotal </th>
                                <th style={headerStyles}>Opciones</th>
                            </tr>
                        )}
                        {detalle.es_mano_obra==1 &&(
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
                        )}
                    
                    </thead>
                    {detalle.es_material==1 && (
                        <tbody>
                            {detalleCotizacion.map((item)=>(
                                item.es_tomo ===1 ? (                            
                                    <tr key={item.id} style={yellowRowStyles}>
                                        <td style={cellStyles}>{item.PDA}</td>
                                        <td colSpan={4} style={cellStyles}> <h6>{item.descripcion} </h6></td>
                                        <td style={cellStyles}>
                                            <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                            <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
                                        </td>
                                    </tr>
                                ):(
                                    <tr key={item.id}>
                                        <td style={cellStyles}>{item.PDA}</td>
                                        <td
                                            style={cellStyles}
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.descripcion) }}
                                        ></td>
                                        <td style={cellStyles}>{item.costo_material_cantidad}</td>
                                        <td style={cellStyles}>{formatCurrency(item.costo_material_unitario)} {detalle?.moneda?.abreviacion || ""}</td>
                                        <td style={cellStyles}>{formatCurrency(item.costo_material_subtotal)} {detalle?.moneda?.abreviacion || ""}</td>
                                        <td style={cellStyles}>                                    
                                            <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                            <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
                                        </td>
                                    </tr>
                                )  
                            ))}
                        </tbody>      
                    )}
                    {detalle.es_mano_obra==1 &&(
                        <tbody>
                            {detalleCotizacion.map((item)=>(
                                item.es_tomo ===1 ? (                            
                                    <tr key={item.id} style={yellowRowStyles}>
                                        <td style={cellStyles}>{item.PDA}</td>
                                        <td colSpan={7} style={cellStyles}> <h6>{item.descripcion}</h6></td>
                                        <td style={cellStyles}>
                                            <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                            <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
                                        </td>
                                    </tr>
                                ):(
                                    <tr key={item.id}>
                                        <td style={cellStyles}>{item.PDA}</td>
                                        <td
                                            style={cellStyles}
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.descripcion) }}
                                        ></td>
                                        <td style={cellStyles}>{item.costo_material_cantidad}</td>
                                        <td style={cellStyles}>{(item.costo_material_unitario)?`${formatCurrency(item.costo_material_unitario)} ${detalle?.moneda?.abreviacion || ""}`:'--'}</td>
                                        <td style={cellStyles}>{(item.costo_material_subtotal)? `${formatCurrency(item.costo_material_subtotal)} ${detalle?.moneda?.abreviacion || ""}`: '--'}</td>
                                        <td style={cellStyles}>{(item.costo_mano_obra_unitario)? `${formatCurrency(item.costo_mano_obra_unitario)} ${detalle?.moneda?.abreviacion || ""}`: '--'}</td>
                                        <td style={cellStyles}>{(item.costo_mano_obra_subtotal)?`${formatCurrency(item.costo_mano_obra_subtotal)} ${detalle?.moneda?.abreviacion || ""}`: '--'}</td>
                                        <td style={cellStyles}>{(item.obra_material_subtotal)? `${formatCurrency(item.obra_material_subtotal)} ${detalle?.moneda?.abreviacion || ""}`: '--'}</td>
                                        <td style={cellStyles}>                                            
                                            <Button icon="pi pi-refresh" tooltip="Actualizar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="help" aria-label="Actualizar" onClick={()=>{modalUpdate(item)}} />
                                            <Button icon="pi pi-times" tooltip="Eliminar" tooltipOptions={{ showDelay: 100, hideDelay: 300 }} rounded text severity="danger" aria-label="Eliminar" onClick={()=>{preguntaEliminacion(item)}}/>
                                        </td>
                                    </tr>
                                )  
                            ))}
                        </tbody>
                    )}
                </table>
             )}
            {/* Total {totalDetalle} */}
            
            <Toolbar end={endContent} />
            
            <DialogDetalleCotizacion 
                cotizacion={cotizacion} 
                detalleItem={detalle}
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