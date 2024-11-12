import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import TablasCatalogos from "./TablasCatalogos";
import FormularioProvedor from "./FormularioProvedor";
        

export default function DialogoCat ({tpOperacion, setOperacion}) {
    const [visible, setVisible] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState([]); // La data de los request

    const [mostrarFomulario, setMostrarFomulario] = useState('')

    useEffect(()=>{
        console.log("Aqui la info ",tpOperacion);
        
        switch (tpOperacion) {
            case 'provedores':                
                setVisible(true);
                obtenerProvedores()
                setTitulo('Catalogo de Provedores');
                break;
            case 'departamentos':            
                setVisible(true);
                setTitulo('Catalogo de Departamentos')
                break;
            case 'clientes':            
                setVisible(true);
                setTitulo('Catalogo de Clientes')
                break;
            case 'unidadesMedidas':
                setTitulo('Catalogo de Unidades de Medida')
                setVisible(true);                
                break;
            case 'usuarios':            
                setTitulo('Catalogo de Usuarios')
                setVisible(true);
                break;
            case 'datosEmpresa':            
                setTitulo('Datos de la Empresa')
                setVisible(true);
                break;        
            default:
                setTitulo('')
                setVisible(false);
                setOperacion(null);
                break;
        }
    },[tpOperacion])


    const obtenerProvedores = async() =>{
        await axios.get(`${route('catalogo.list.provedores')}`).then((response) => {
            const {data} = response;
            setData(data);
        });
    }

    const eliminiarRegistro = async(tipo,identy) => {
        switch (tipo) {
            case 'provedor':
                await eliminarProvedor(identy)
                break;
        
            default:
                break;
        }
        
    }

    const mostrarFormulario = (tipo) =>{
        switch (tipo) {
            case 'provedores':
                alert("Vamos a mostrar el formulario")
                setMostrarFomulario(tipo)
                break;
        
            default:
                break;
        }
    }
    
    const eliminarProvedor = async (identy) =>{
        await axios.delete(`${route('catalogo.delete.provedor',{ id: identy })}`).then(() => {
            alert("Post deleted!");          
        });       
    }

    const agregarProvedor = async (datos) =>{
        await axios.post(`${route('catalogo.nuevo.provedor')}`, datos).then(() => {
            alert("Post creado!");          
        }); 
    }


    return (      
        <Dialog header={titulo} visible={visible} style={{ width: '85vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <Card>
                {/* Aqui se van a manejar todos los datos  */}
                <TablasCatalogos opMostrar={tpOperacion} data={data} eliminar={eliminiarRegistro} shoAgregar={mostrarFormulario}/>   

                {/* Aqui se tienen que mostrar los formulario segun lo seleccionado */}
                {mostrarFomulario == 'provedores' && <FormularioProvedor/>   }     
                
            </Card>
        </Dialog>
    );
    
}
