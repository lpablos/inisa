import React, { Component, useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Editor } from 'primereact/editor';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';


const EliminarMotivo = ({activarEliminar, setPreguntaEliminar, identyDelete, setIdentyDelete, recargar}) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [loader,setLoader] = useState(false);
    const toast = useRef(null);
    const [deleteId, setDeleteId] = useState(null);


    useEffect(()=>{    
        if(activarEliminar == true){
            setVisible(true)
        }
        setDeleteId(identyDelete)

    },[activarEliminar, identyDelete])

    useEffect(()=>{
        if(visible===false){
            setPreguntaEliminar(false)
            setText('')
        }
    },[visible])

    const validarDatos = ({ responsable, titulo, descripcion, prioridad, estatus, fecha }) => {
        if (!descripcion?.trim()) return "La descripción es obligatoria.";
        return null; // Todo correcto
    };


    const limpiarFormulario = () =>{
        setText('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoader(true);
        const datos = {
            descripcion:text,
        }
        const error = validarDatos(datos);
        if (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error,
                life: 3000,
            });
                setLoader(false);
            return;
        }

        try {
            const response = await axios.post(route("activiades.destroy", { activiade: deleteId }), {
                ...datos,                
                _method: 'DELETE'        
            });      
            
            const { data, status} = response
            
            if (status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                setIdentyDelete(null)
                limpiarFormulario()
                setVisible(false)
                setLoader(false)
                setPreguntaEliminar(false)
                recargar(1) // Llamada Externa Funcion Hermano
            }
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Erro Al Eliminar Actividad.",
                life: 3000,
            });
            setLoader(false)
        }

    };
    return (    
        <div className="flex justify-content-center">
            <Toast ref={toast} />
            <Dialog header="Baja Registro" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <form action="" onSubmit={handleSubmit}>
                    <p className="m-0">
                        Para continuar con el proceso de eliminación del registro, ¿podría indicarnos el motivo de esta solicitud?.
                    </p>
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} className="mt-4"/>
                    <div className="flex items-center gap-3 p-4">
                        <div className="ml-auto flex gap-2">
                            <Button label="Eliminar" icon="pi pi-check" loading={loader}  type="submit"/>
                        </div>
                    </div>   
                </form>
            </Dialog>
        </div>
    );
};

export default EliminarMotivo;