import Layout from '@/Layouts/layout/layout';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputMask } from "primereact/inputmask";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
        
        

const Empresa = () => {
    const toast = useRef(null);


    const [cargando, setCargando] = useState(false)
    
    const [nombre,setNombre] = useState()
    const [descripcion,setDescripcion] = useState()
    const [direccion,setDireccion] = useState()
    const [colonia, setColonia] = useState();
    const [cp, setCp] = useState()
    const [correo, setCorreo]= useState();
    const [telefonoA, setTelefonoA]= useState();
    const [telefonoB, setTelefonoB]= useState();
    const [telefonoUrgenciaA, setTelefonoUrgenciaA]= useState();
    const [telefonoUrgenciaB, setTelefonoUrgenciaB]= useState();

    useEffect(()=>{
        obtenerDetalleEmpresa();
    },[])

    const obtenerDetalleEmpresa = async() => {
        setCargando(true)
        setTimeout(async() => {
            try {     
                const response = await axios.get(route("catalogos.informacion.empresa.detalle"));
                const {status, data} = response;
                if(status===200){
                    definirDatos(data)
                }
                setCargando(false)
            } catch (error) {
                setCargando(false)
                console.error("Error al obtener cotizaciones:", error);
            }            
        }, 800);
    }

    const definirDatos = (data) =>{
        setNombre(data.nombre || '')
        setDescripcion(data.descripcion || '')
        setDireccion(data.direccion || '')
        setColonia(data.colonia ||'')
        setCp(data.codigo_postal|| '')
        setCorreo(data.correo ||'')
        setTelefonoA(data.telefono1 || '')
        setTelefonoB(data.telefono2 || '')
        setTelefonoUrgenciaA(data.telefono_urgencias1 || '')
        setTelefonoUrgenciaB(data.telefono_urgencias2 || '')
    }
    const submit = async () => {
        
        setCargando(true)
        const datos = {
            nombre:nombre,
            descripcion:descripcion,
            direccion:direccion,
            colonia:colonia,
            codigo_postal:cp,
            correo:correo, 
            telefono1:telefonoA,
            telefono2:telefonoB,
            telefono_urgencias1:telefonoUrgenciaA,
            telefono_urgencias2:telefonoUrgenciaB
        }
        // patch(route('profile.update'));
        const response = await axios.post(
            `${route("actualizar.datos.empresa")}`,
            datos
        );
        const { status, data } = response;
        
        if (status === 200) {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: `${data.success}`,
                life: 3000,
            });
            setTimeout(() => {
                obtenerDetalleEmpresa()
            }, 700);
        }
        setCargando(false);
    };
  
    
    return (
        <Layout>
            <div className="card col-12">
                <div className="grid m-1">
                    <div className="col-10 text-center">
                        <h3>Detalle Empresa</h3>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <Fieldset legend="Información Base">
                            <Toast ref={toast} />
                            {cargando === true  && (
                                <div className="flex justify-content-center">
                                    <ProgressSpinner />
                                </div>
                            )}
                            {cargando === false && (
                                <>
                                    <div className="flex flex-wrap gap-3 p-fluid mt-2">
                                        <div className="flex-auto">
                                            <label htmlFor="nombre" className="font-bold block mb-2">Nombre</label>
                                            <InputText inputId="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="descripcion" className="font-bold block mb-2">Descripcion</label>
                                            <InputText inputId="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3 p-fluid mt-2">
                                        <div className="flex-auto">
                                            <label htmlFor="direccion" className="font-bold block mb-2">Dirección</label>
                                            <InputText inputId="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3 p-fluid mt-2">
                                        <div className="flex-auto">
                                            <label htmlFor="colonia" className="font-bold block mb-2">Colonia</label>
                                            <InputText inputId="colonia" value={colonia} onChange={(e) => setColonia(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="cp" className="font-bold block mb-2">CP</label>
                                            <InputText inputId="cp" value={cp} onChange={(e) => setCp(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="correo" className="font-bold block mb-2">Correo</label>
                                            <InputText inputId="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3 p-fluid mt-2">
                                        <div className="flex-auto">
                                            <label htmlFor="telefonoA" className="font-bold block mb-2">Telefono 1</label>
                                            {/* <InputMask id="phone1" mask="(999) 999-9999" placeholder="(99)-999999" value={telefonoA} onChange={(e) => setTelefonoA(e.target.value)}></InputMask> */}
                                            <InputText inputId="emergenciaA" value={telefonoA} onChange={(e) => setTelefonoA(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="cp" className="font-bold block mb-2">Telefono 2</label>
                                            {/* <InputMask id="phone2" mask="(999) 999-9999" placeholder="(99)-999999" value={telefonoB} onChange={(e) => setTelefonoB(e.target.value)}></InputMask> */}
                                            <InputText inputId="emergenciaA" value={telefonoB} onChange={(e) => setTelefonoB(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="emergenciaA" className="font-bold block mb-2">Telefono Emergencia 1</label>
                                            {/* <InputMask id="phone3" mask="(999) 999-9999" placeholder="(99)-999999" value={telefonoUrgenciaA} onChange={(e) => setTelefonoUrgenciaA(e.target.value)}></InputMask> */}
                                            <InputText inputId="emergenciaA" value={telefonoUrgenciaA} onChange={(e) => setTelefonoUrgenciaA(e.target.value)} />
                                        </div>
                                        <div className="flex-auto">
                                            <label htmlFor="emergenciaB" className="font-bold block mb-2">Telefono Emergencia 2</label>
                                            {/* <InputMask id="phone4" mask="(999) 999-9999" placeholder="(99)-999999" value={telefonoUrgenciaB} onChange={(e) => setTelefonoUrgenciaB(e.target.value)}></InputMask> */}
                                            <InputText inputId="emergenciaB" value={telefonoUrgenciaB} onChange={(e) => setTelefonoUrgenciaB(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 m-4">
                                        <Button
                                            severity="success"
                                            label="Guardar"
                                            className="ml-auto"
                                            onClick={()=>{submit()}}
                                        />
                                    </div>
                                </>
                            )}
                            

                        </Fieldset>
                        
                    </div>
                </div>
                
            </div>

        </Layout>
    );
    
}

export default Empresa;