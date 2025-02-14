import React, { useState, useRef} from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Editor } from "primereact/editor";
import { Toast } from 'primereact/toast';
import axios from 'axios';

const NewClienteDialog = ({reloadRegistros}) => {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [habilitaBtn, setHabilitaBtn] = useState(false)

    const [razonSocial, setRazonSocial] = useState('');
    const [nombreComercial, setNombreComercial] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email,setEmail] = useState('');
    const [mensajeAfectivo, setMensajeAfectivo] = useState('');
    const [numeroProvedor, setNumeroProvedor] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [mensajeVigencia,setMensajeVigencia] = useState('');
    const [comentarioObservacion,setComentarioObservacion] = useState('');


    const registrarCliente = async () =>{
        setHabilitaBtn(true)
        const datos = {
            nombre: razonSocial,
            abreviacion: nombreComercial,
            direccion: direccion,
            telefono: telefono,
            email: email,
            numeroProvedor: numeroProvedor,
            destinatario: destinatario,
            mensajeAfectivo: mensajeAfectivo,
            mensajeVigencia: mensajeVigencia,
            comentarioObservacion: comentarioObservacion,
        }
        try {
            const response = await axios.post(route("catalogo.registrar.cliente.nuevo"), datos);
            console.log("Esto devuelve", response);
            const { data, status} = response
            if (status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                limpiarFormulario()
                setVisible(false)
                reloadRegistros()
                setTimeout(() => {
                    setHabilitaBtn(false)
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            setHabilitaBtn(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se puede almacenar el cliente.. Intenta de nuevo",
                life: 3000,
            });
        }
    }
    
    const limpiarFormulario = () =>{
        setRazonSocial('');
        setNombreComercial('');
        setDireccion('');
        setTelefono('');
        setEmail('');
        setMensajeAfectivo('');
        setNumeroProvedor('');
        setDestinatario('');
        setMensajeVigencia('');
        setComentarioObservacion('');
    }

    return (
        <>
            <div className="text-right gap-2">
                <Button className='m-1' icon="pi pi-plus" rounded severity="info" aria-label="Favorite" tooltip="Nuevo Registro" tooltipOptions={{ position: 'left' }} onClick={() => setVisible(true)}/>
            </div>
            <div className="flex justify-content-center">
            
                <Dialog header="Cliente" visible={visible} maximizable style={{ width: '80vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    <Fieldset legend="Datos Generales">
                        <div className="flex flex-wrap gap-3 p-fluid">
                            <div className="flex-auto">
                                <label htmlFor="razonSocial" className="font-bold block mb-2">RazonSocial (Nombre)</label>
                                <InputText inputId="razonSocial" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="nombreComercial" className="font-bold block mb-2">Nombre Comercial</label>
                                <InputText inputId="nombreComercial" value={nombreComercial} onChange={(e) => setNombreComercial(e.target.value)} />
                            </div>
                          
                           
                        </div>
                        <div className="flex flex-wrap gap-3 p-fluid mt-2">
                            <div className="flex-auto">
                                <label htmlFor="direccion" className="font-bold block mb-2">Dirección</label>
                                <InputText inputId="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="telefono" className="font-bold block mb-2">Teléfono</label>
                                <InputText inputId="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="email" className="font-bold block mb-2">Correo Electronico</label>
                                <InputText inputId="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </Fieldset>
                    <Fieldset legend="Cabecera PDF, Excel" className='mt-3'>
                        <div className="flex flex-wrap gap-3 p-fluid">
                            <div className="flex-auto">
                                <label htmlFor="numeroProvedor" className="font-bold block mb-2">Numero de Provedor</label>
                                <InputText inputId="numeroProvedor" value={numeroProvedor} onChange={(e) => setNumeroProvedor(e.target.value)} />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="destinatario" className="font-bold block mb-2">Destinatario(Nombre)</label>
                                <InputText inputId="destinatario" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 p-fluid mt-5">
                            <div className="flex-auto ">
                                <label htmlFor="msnAfectivo" className="font-bold block mb-2">Mensaje Afectivo</label>
                                <Editor value={mensajeAfectivo} onTextChange={(e) => setMensajeAfectivo(e.htmlValue)} style={{ height: '80px' }} />
                            </div>
                        </div>
                    </Fieldset>
                    <Fieldset legend="Pie Pagina PDF, Excel" className='mt-3'>
                        <div className="flex flex-wrap gap-3 p-fluid">
                            <div className="flex-auto">
                                <label htmlFor="vigenciaMsj" className="font-bold block mb-2">Mnesaje Vigencia</label>
                                <InputText inputId="vigenciaMsj" value={mensajeVigencia} onChange={(e) => setMensajeVigencia(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 p-fluid mt-5">
                            <div className="flex-auto ">
                                <label htmlFor="observacionComentario" className="font-bold block mb-2">Comentarios Observación</label>
                                <Editor value={comentarioObservacion} onTextChange={(e) => setComentarioObservacion(e.htmlValue)} style={{ height: '80px' }} />
                            </div>
                        </div>
                    </Fieldset>
                    <div className="card flex justify-content-center gap-2">

                        <Button label="Guardar" icon="pi pi-check" disabled={habilitaBtn} onClick={()=>registrarCliente()}/>
                        <Button label="Limpiar Formulario" icon="pi pi-refresh" disabled={habilitaBtn} onClick={()=>limpiarFormulario()} />
                        
                    </div>
                </Dialog>
            </div>
            <Toast ref={toast} />
        </>
    );
    
}

export default NewClienteDialog;