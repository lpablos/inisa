import React, { Component, useEffect, useState, useRef } from 'react';

import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import axios from "axios";
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Editor } from 'primereact/editor';





const FormItemDetalle = ({cotizacion, detalle=null, modalVisible, recargarListado, detalleItem}) => {
    console.log("Esto es ---->", detalleItem);
    
    const toast = useRef(null);
    const [progress, setProgress] = useState(false)
    const [disabledDefiniciónTomo, setDisabledDefiniciónTomo]=useState(false)
    const [accionBtn, setAccionBtn] = useState('Registrar')
    const [identyDetallle, setIdentyDetallle] = useState(null);  
    const [identyCotizacion, setIdentyCotizacion] = useState(null);    
    
    const [segmento, setSegmento] = useState('todo');
    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    useEffect(()=>{
        if(cotizacion){
            setIdentyCotizacion(cotizacion)
        } 
    },[cotizacion])

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (detalle == null) {                    
                    setSegmento('todo');
                    await getUnidadesMedida();
                } else if (detalle.es_tomo === 1) {
                    setSegmento('tomo');
                    await getDetalleItem(detalle.id);
                    setIdentyDetallle(detalle.id);
                    setAccionBtn('Actualizar');
                } else if (detalle.es_tomo === 0) {
                    setSegmento('detalle');
                    await getUnidadesMedida();
                    await getDetalleItem(detalle.id);
                    setIdentyDetallle(detalle.id);
                    setAccionBtn('Actualizar');
                }else{
                    
                }
            } catch (error) {
                console.error("Error en fetchData:", error);
            }
        };
    
        fetchData();
    }, [detalle]);
    
    const [unidadesDeMedida, setUnidadesDeMedida] = useState([]);
    // Todo lo relacionado con el tomo
    const [perteneceTomo, setPerteneceTomo] = useState(0);
    useEffect(()=>{
        if(perteneceTomo==2){
            getListadoTomoAsc()
        }        
    },[perteneceTomo])
    const [tpAsoTomo, setTpAsoTomo] = useState([
        { name: 'Ninguno', value:0 },
        { name: 'Captura Tomo', value:1 },
        { name: 'Listar Tomos', value:2}
    ]);
    const [capturaTomo, setCapturaTomo] = useState('');
    const [seleccionTomo, setSeleccionTomo] = useState(null);
    const [listaTomos, setListaTomo] = useState([]);    
    // Todo lo relacionado con el costo de materiales
    const [descripcionMaterial, setDescripcionMaterial]= useState('');
    const [seleccionUnidadMedida, setSeleccionUnidadMedida] = useState(null);
    const [cantidadMaterial, setCantidadMaterial] = useState(null);
    const [costoMaterialSugerido, setCostoMaterialSugerido] = useState(null);
    const [costoMaterialFinal,setCostoMaterialFinal] = useState(null);  
    const [subTotalMaterial, setSubTotalMaterial] = useState(0);
    // Efecto Espejo Costo Sugerido
    useEffect(()=>{        
        setCostoMaterialFinal(costoMaterialSugerido)
    },[costoMaterialSugerido])
    useEffect(()=>{
        const total = cantidadMaterial * costoMaterialFinal;
        setSubTotalMaterial(total)
    },[cantidadMaterial, costoMaterialFinal])

    // ---------------------------------------------

    // Todo lo relacionado con el costo de mano de obra
    const [costoManoObraSugerido, setCostoManoObraSugerido] = useState(null);
    const [costoManoObraFinal, setCostoManoObraFinal] = useState(null);
    const [subTotalManoObra, setSubTotalManoObra] = useState(0);
    useEffect(()=>{
        setCostoManoObraFinal(costoManoObraSugerido)
    },[costoManoObraSugerido])
    useEffect(()=>{
        const totalObra = cantidadMaterial * costoManoObraFinal;
        setSubTotalManoObra(totalObra)
    },[cantidadMaterial,costoManoObraFinal]);

    // ---------------------------------------------

    // --- final M.O./MATER.
    const [subTotalMateObraTotal, setSubTotalMateObraTotal] = useState(0);
    useEffect(()=>{
        const totalTodo = subTotalMaterial+subTotalManoObra;
        setSubTotalMateObraTotal(totalTodo)
    },[subTotalMaterial,subTotalManoObra])
    
    const [citaComentario, setCitaComentario] = useState(null);

    const getListadoTomoAsc = async() =>{
        await axios
        .get(`${route("cotizacion.list.tomos", { identy: identyCotizacion })}`)
        .then((response) => {
            const {data, status } = response       
            if(status == 200){
                const dataMapeada = data.map(item => ({
                    id: item.id,
                    name: item.PDA + ' - ' + item.descripcion
                }));
                setListaTomo(dataMapeada)
            }
        });
    }

    const getUnidadesMedida = async() =>{
        await axios
        .get(`${route("catalogo.list.unidadesmedidas")}`)
        .then((response) => {
            const {data, status } = response
            if(status == 200){
                const dataMapeada = data.map(item => ({
                    value: item.id,
                    name: item.nombre + ' - ' + item.abreviatura
                }));
                setUnidadesDeMedida(dataMapeada);
            }
        });
    }

    const getDetalleItem = async (identy) =>{
        const id = identy
        await axios
        .get(`${route("cotizacion.captura.item.detalle", { id: id })}`)
        .then((response) => {
            const {data, status } = response            
            
            if(status == 200){
                if(data.es_tomo==1){
                    setPerteneceTomo(1)
                    setCapturaTomo(data.descripcion);
                    setTimeout(() => {
                        setDisabledDefiniciónTomo(true)
                    }, 600);
                    
                }else{
                    setDisabledDefiniciónTomo(false)
                    setDescripcionMaterial(data.descripcion);                
                    setCantidadMaterial(data.costo_material_cantidad);
                    setCostoMaterialSugerido(data.costo_material_unitario_sugerido);
                    setCostoManoObraSugerido(data.costo_mano_obra_unitario_sugerido);
                    setCitaComentario(data.comentarios_extras);
                    setTimeout(() => {
                        setSeleccionUnidadMedida(data.cat_unidad_medida_id);
                        setCostoMaterialFinal(data.costo_material_unitario);     
                        setCostoManoObraFinal(data.costo_mano_obra_unitario);              
                    }, 600);
                    setTimeout(() => {
                        setSubTotalMaterial(data.costo_material_subtotal);    
                        setSubTotalManoObra(data.costo_mano_obra_subtotal);
                        setSubTotalMateObraTotal(data.obra_material_subtotal);
                    }, 1000);
                }
                


            }
        });
    }

    const almacenarRegistro = async () => {
        setProgress(true)
        const datos = {
            identyCotizacion: identyCotizacion,
            perteneceTomo: perteneceTomo,
            capturaTomo: capturaTomo,
            seleccionTomo: seleccionTomo,
            // -------------Material------------------------
            descripcionMaterial: descripcionMaterial,
            seleccionUnidadMedida: seleccionUnidadMedida,
            cantidadMaterial: cantidadMaterial,
            costoMaterialSugerido: costoMaterialSugerido,
            costoMaterialFinal: costoMaterialFinal,
            subTotalMaterial: subTotalMaterial,
            // ----------------Mano Obra---------------------
            costoManoObraSugerido: costoManoObraSugerido,
            costoManoObraFinal: costoManoObraFinal,
            subTotalManoObra: subTotalManoObra,
            // ----------------M.O./MATER---------------------
            subTotalMateObraTotal: subTotalMateObraTotal,
            citaComentario: citaComentario,
        }
       
        await axios
        .post(`${route("cotizacion.guardad.captura")}`, datos)
        .then((response) => {
            const { status, data } = response;
            console.log("Esto se optiene", data);
            
            if (status == 201) {
                toast.current.show({ severity: 'info', summary: 'Info', detail: `${data.success}`});
            }
            setLoader(false); 
        })
        .catch((error) => {            
            const {response, status} = error
            if(status == 500){
                const mensaje = response?.data?.error || ''
                toast.current.show({
                  severity: "error",
                  summary: "Error",
                  detail:`No se pudo guardar la cotización.${mensaje}`,
                  life: 9000,
                });
            }
          })
        .finally(() => {
            setProgress(false)            
            setTimeout(() => {
                modalVisible()    
            }, 2000);
        });
    }

    const actualizarRegistro = async () =>{
        setProgress(true)
        const datos = {
            
            identyDetallle: identyDetallle,
            identyCotizacion: identyCotizacion,
            perteneceTomo: perteneceTomo,
            capturaTomo: capturaTomo,
            seleccionTomo: seleccionTomo,
            // -------------Material------------------------
            descripcionMaterial: descripcionMaterial,
            seleccionUnidadMedida: seleccionUnidadMedida,
            cantidadMaterial: cantidadMaterial,
            costoMaterialSugerido: costoMaterialSugerido,
            costoMaterialFinal: costoMaterialFinal,
            subTotalMaterial: subTotalMaterial,
            // ----------------Mano Obra---------------------
            costoManoObraSugerido: costoManoObraSugerido,
            costoManoObraFinal: costoManoObraFinal,
            subTotalManoObra: subTotalManoObra,
            // ----------------M.O./MATER---------------------
            subTotalMateObraTotal: subTotalMateObraTotal,
            citaComentario: citaComentario,
        }
        
        try {
            // setLoader(true); 
            await axios
            .post(`${route("cotizacion.captura.item.actualiza")}`, datos)
            .then((response) => {
                const { status, data } = response;                
                if (status == 201) {
                    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
                }
                // setLoader(false); 
            })
            .finally(() => {
                setProgress(false)
                setTimeout(() => {
                    modalVisible()    
                }, 600);
            });            
        } catch (error) {
            console.log("Esto pasa", error);
            setLoader(false); 
            toast.current.show
        }
       
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue   
        if(segmento == 'todo'){
            almacenarRegistro();
        }
        if(segmento == 'tomo' || segmento == 'detalle'){
            actualizarRegistro()
        }
    };



    

    return (
          <div className="card">
            <form action="" method="post" onSubmit={handleSubmit}>
                        
                        {(segmento === 'todo' || segmento === 'tomo') && (
                            <>
                                <div class="formgrid grid">
                                    <div class="field col-4">
                                        <label htmlFor="defineTomo" className="font-bold block mb-2">Definición de Tomo</label>
                                        <Dropdown 
                                            value={perteneceTomo} 
                                            onChange={(e) => {
                                                setPerteneceTomo(e.value)
                                            }} 
                                            disabled={disabledDefiniciónTomo}
                                            options={tpAsoTomo} 
                                            optionLabel="name" 
                                            placeholder="Seleccione" 
                                            className="w-full" />
                                    </div>
                                    <div class="field col-8">
                                        {(perteneceTomo == 1) && (
                                            <>
                                                <label htmlFor="mile" className="font-bold block mb-2">Captura un Tomo</label>
                                                <InputText value={capturaTomo} onChange={(e) => setCapturaTomo(e.target.value)} className="w-full"/>
                                            </>                 
                                        )}
                                        {(perteneceTomo==2) &&(
                                            <>
                                                <label htmlFor="selectTomo" className="font-bold block mb-2">Selecciona un Tomo</label>
                                                <Dropdown 
                                                        value={seleccionTomo} 
                                                        onChange={(e) => setSeleccionTomo(e.value)} 
                                                        options={listaTomos} 
                                                        optionLabel="name" 
                                                        placeholder="Seleccione" 
                                                        className="w-full" />
                                            </>  
                                        )}
                                    </div>
                                </div>
                                <Divider />
                            </>
                        )}
                        {(segmento === 'todo' || segmento === 'detalle') && (
                            <>
                                <h5>Costo de Materiales</h5>
                                <div class="formgrid grid">
                                    <div class="field col-12">
                                        <label htmlFor="percent" className="font-bold block mb-2">Descripción</label>
                                        <Editor value={descripcionMaterial} onTextChange={(e) => setDescripcionMaterial(e.htmlValue)} style={{ height: '160px' }} />
                                        {/* <InputTextarea 
                                            className="w-full" 
                                            value={descripcionMaterial} 
                                            onChange={(e) => setDescripcionMaterial(e.target.value)} 
                                            rows={2} cols={30}/> */}
                                    </div>               
                                </div>
                                <div class="formgrid grid">
                                    <div class="field col-4">
                                        <label htmlFor="percent" className="font-bold block mb-2">Unidad</label>
                                        <Dropdown 
                                            value={seleccionUnidadMedida} 
                                            onChange={(e) => setSeleccionUnidadMedida(e.value)} 
                                            options={unidadesDeMedida} 
                                            optionLabel="name" 
                                            placeholder="Selecciona" 
                                            className="w-full"/>
                                    </div>  
                                    <div class="field col-4">
                                        <label htmlFor="cantidad" className="font-bold block mb-2">Catidad</label>
                                        <InputNumber 
                                            inputId="cantidad" 
                                            value={cantidadMaterial} 
                                            onValueChange={(e) => setCantidadMaterial(e.value)} 
                                            placeholder="Cantidad"/>
                                        
                                    </div>  
                                    <div class="field col-4">
                                        <label htmlFor="CostoSugerido" className="font-bold block mb-2">Costo Unitario Sugerido</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">$</span>
                                            <InputNumber 
                                                inputId="cantidad" 
                                                value={costoMaterialSugerido} 
                                                onValueChange={(e) => setCostoMaterialSugerido(e.value)} 
                                                placeholder="Consto Unitario Sugerido"/>
                                        </div>
                                        
                                    </div>  
                                    <div class="field col-4">
                                        
                                        <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">$</span>
                                            <InputNumber 
                                                inputId="cantidad" 
                                                value={costoMaterialFinal} 
                                                onValueChange={(e) => setCostoMaterialFinal(e.value)} 
                                                placeholder="Consto Unitario"/>
                                        </div>
                                    </div>  
                                    <div class="field col-4">
                                        <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">$</span>
                                            <InputNumber 
                                                inputId="cantidad" 
                                                disabled
                                                value={subTotalMaterial} 
                                                onValueChange={(e) => setSubTotalMaterial(e.value)} 
                                                placeholder="Consto Unitario"/>
                                        </div>
                                    </div>  
                                </div>
                                {detalleItem.es_mano_obra ==1 && (
                                    <>
                                        <Divider />
                                        <h5>Costo de Mano de Obra</h5>
                                        
                                        <div class="formgrid grid">
                                            
                                            <div class="field col-4">
                                                <label htmlFor="costUnitSugeridoManoObra" className="font-bold block mb-2">Costo Unitario Sugerido</label>
                                                <div className="p-inputgroup flex-1">
                                                    <span className="p-inputgroup-addon">$</span>
                                                    <InputNumber 
                                                        inputId="cantidad" 
                                                        value={costoManoObraSugerido} 
                                                        onValueChange={(e) => setCostoManoObraSugerido(e.value)} 
                                                        placeholder="Consto Unitario"/>
                                                </div>
                                                
                                            </div>  
                                            <div class="field col-4">
                                                
                                                <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario</label>
                                                <div className="p-inputgroup flex-1">
                                                    <span className="p-inputgroup-addon">$</span>
                                                    <InputNumber 
                                                        inputId="cantidad" 
                                                        value={costoManoObraFinal} 
                                                        onValueChange={(e) => setCostoManoObraFinal(e.value)} 
                                                        placeholder="Consto Unitario"/>
                                                </div>
                                            </div>  
                                            <div class="field col-4">
                                                <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                                                <div className="p-inputgroup flex-1">
                                                    <span className="p-inputgroup-addon">$</span>
                                                    <InputNumber 
                                                        disabled
                                                        inputId="cantidad" 
                                                        value={subTotalManoObra} 
                                                        onValueChange={(e) => setSubTotalManoObra(e.value)} 
                                                        placeholder="Consto Unitario"/>
                                                </div>
                                            </div>  
                                        </div>
                                        <Divider />
                                        <h5>M.O./MATER.</h5>
                                        <div class="formgrid grid">
                                            <div class="field col-4">
                                                <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                                                <div className="p-inputgroup flex-1">
                                                    <span className="p-inputgroup-addon">$</span>
                                                    <InputNumber 
                                                        disabled
                                                        inputId="cantidad" 
                                                        value={subTotalMateObraTotal} 
                                                        onValueChange={(e) => setSubTotalMateObraTotal(e.value)} 
                                                        placeholder="Subtotal"/>
                                                </div>
                                                
                                            </div>  
                                        </div>
                                    </>
                                )}
                                <Divider />
                                <h5>Agregar algun comentario</h5>
                                <div class="formgrid grid">
                                    <div class="field col-12">
                                        <label htmlFor="percent" className="font-bold block mb-2">Descripcion</label>
                                        <InputTextarea className="w-full" value={citaComentario} onChange={(e) => setCitaComentario(e.target.value)} rows={2} cols={30} />
                                    </div>               
                                </div>
                            </>
                        )}
                    
                
                
                <div className="card flex justify-content-center">
                    {progress && (
                        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                    )}
                    {!progress && (
                        <Button type="submit" label={accionBtn} />
                    )}
                </div>
            </form>
            <Toast ref={toast} />
            
            
        </div>
    );
    
}

export default FormItemDetalle;