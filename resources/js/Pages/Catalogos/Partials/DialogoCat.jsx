import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import TablasCatalogos from "./TablasCatalogos";
        

export default function DialogoCat ({tpOperacion, setOperacion}) {
    const [visible, setVisible] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState([]); // La data de los request

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
    return (      
        <Dialog header={titulo} visible={visible} style={{ width: '85vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <Card>
                <TablasCatalogos opMostrar={tpOperacion} data={data}/>           
            </Card>
        </Dialog>
    );
    
}
