import React, { Component, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import TableConceptosGral from './TableConceptosGral';
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from 'react';
        

const BusquedaConceptos = ({cotizacion, setReloadList}) => {
    const [visible, setVisible] = useState(false);
    const [concepto, setConcepto] = useState('');
    
    const [loader, setLoader] = useState(false);
    const [registros, setRegistros]= useState([])
    const [numeroRegistros, setNumeroRegistros]= useState(0)
    const [error, setError] = useState("");
    const [identyCotizacion, setIdentyCotizacion] = useState(null);  
    
    const [tpAsoTomo, setTpAsoTomo] = useState([
        { name: 'Ninguno', value:0 },
        { name: 'Captura Tomo', value:1 },
        { name: 'Listar Tomos', value:2}
    ]);
    const [listaTomos, setListaTomo] = useState([]);  
    
    const [perteneceTomo, setPerteneceTomo] = useState(0);
    const [capturaTomo, setCapturaTomo] = useState('');
    const [seleccionTomo, setSeleccionTomo] = useState(null);

    const validacionCaracteres = (event) =>{
        const value = event.target.value;
        setConcepto(value);
        if (value.length < 10) {
          setError("El concepto debe tener al menos 15 caracteres.");
        } else {
          setError(""); // Limpiar el mensaje de error si es válido
        }
    }

    const busquedaGeneralConcepto = async () =>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
        try {
            const response = await axios.post(`${route("buscador.general.concepto")}`,{'concepto':concepto});
            if (response.status === 200) {
                
                const {data, mensaje, registros} = response.data
                setRegistros(data)
                setNumeroRegistros(registros);
            }            
        } catch (error) {
            console.log("Este dato ", error);            
            alert("Error")
        }
    }
    // buscador.general.concepto
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

    const validacionConcepto = (dato) => {
        alert("Validacion")
        console.log('Evento recibido del hijo:', dato);
        // Realiza aquí las acciones que necesites
    };

    useEffect(()=>{
        if(visible){
            getListadoTomoAsc()
        }
    },[visible])

    useEffect(()=>{
        setIdentyCotizacion(cotizacion)
    },[cotizacion])

    return (
        <>
            <Button className='mr-1' icon="pi pi-search" rounded aria-label="Search" tooltip="Busqueda Conceptos" tooltipOptions={{ position: 'left' }} onClick={() => setVisible(true)}/>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Busqueda de Conceptos" visible={visible} maximizable style={{ width: '80vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>

                <div class="formgrid grid">
                    <div class="field col-3">
                        <label htmlFor="defineTomo" className="font-bold block mb-2">Definición de Tomo</label>
                        <Dropdown value={perteneceTomo} onChange={(e) => setPerteneceTomo(e.value)} options={tpAsoTomo} optionLabel="name" editable placeholder="Selecione un tomo" className="w-full md:w-14rem" />
                    </div>
                    <div class="field col-9">
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
                                    editable
                                    placeholder="Seleccione" 
                                    className="w-full" />
                            </>  
                        )}
                    </div>
                </div>

                <div className="flex justify-content-center m-4">
                    <div className="p-inputgroup flex-1">
                        <InputText placeholder="Captura el concepto a buscar" className="p-inputtext-lg" value={concepto} onChange={((event)=>validacionCaracteres(event))}/>
                        <Button icon="pi pi-search" onClick={()=>busquedaGeneralConcepto()} disabled={concepto.length < 10} />
                    </div> 
                </div>
                {error && (
                    <div className="flex justify-content-center m-4">
                        <div className="p-inputgroup flex-1">
                            <small style={{ color: "red" }}>{error}</small>     
                        </div> 
                    </div>
                )}

                
                {loader && (
                    <div className="flex justify-content-center m-4">
                        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                    </div>
                )}
                {loader == false && registros.length > 0 &&(
                    <TableConceptosGral 
                        listadoConceptos={registros} 
                        totalesAsc={numeroRegistros} 
                        seleccionTomo={seleccionTomo}
                        perteneceTomo={perteneceTomo}
                        capturaTomo={capturaTomo}
                        identyCotizacion={identyCotizacion}
                        setReloadList={setReloadList}
                        setRegistros={setRegistros}
                        
                        validacionConcepto={validacionConcepto}
                        setVisibleModal={setVisible}
                        setConceptoInput={setConcepto}
                    />
                )}
            </Dialog>
        </>
        
    );
    
}

export default BusquedaConceptos;