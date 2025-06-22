import React, { useRef, useState, useEffect} from 'react';
import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Avatar } from 'primereact/avatar';
import { Fieldset } from 'primereact/fieldset';
import { Toast } from 'primereact/toast';
import Comentario from './Comentario';
import { VirtualScroller } from 'primereact/virtualscroller';




const DetalleActividad = () => {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

       const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    useEffect(() => {
        // Simular 15 registros con título y texto breve
        const data = Array.from({ length: 15 }, (_, i) => ({
            titulo: `Título ${i + 1}`,
            detalle: `Este es un texto breve del documento número ${i + 1}`
        }));
        setItems(data);
    }, []);

 
    return (
        <>
            <div className="card ">
                <Fieldset legend={legendTemplate}>
                    <h1 className="text-lg font-bold mb-2">Nombre de la tares</h1>
                    <p className="m-0">
                        Descripcion de la tarea
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>


                    {/* <VirtualScroller
                        items={items}
                        itemSize={50}
                        itemTemplate={Comentario}
                        className="border-1 surface-border border-round cursor-pointer"
                        style={{ width: '100vh', height: '25vh' }}
                    /> */}
                </Fieldset>
            </div>
        </>
    );
};

export default DetalleActividad;