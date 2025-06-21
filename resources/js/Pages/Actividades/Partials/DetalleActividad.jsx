import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Avatar } from 'primereact/avatar';
import { Fieldset } from 'primereact/fieldset';
import { Toast } from 'primereact/toast';
import Comentario from './Comentario';



const DetalleActividad = () => {
    const toast = useRef(null);

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

 
    return (
        <>
            <div className="card">
                <Fieldset legend={legendTemplate}>
                    <h1 className="text-lg font-bold mb-2">Listado de elementos</h1>
                    <p className="m-0">

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset>
            </div>
            <Comentario/>
        
        </>
    );
};

export default DetalleActividad;