import React,{ useState } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';


const BusquedaActividad = () => {
    const [date, setDate] = useState(null);

    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    const [selectedPrioridad, setSelectedPrioridad] = useState(null);
    const prioridad = [
        { name: 'Realizado', code: '1' },
        { name: 'Pendiente', code: '3' },
        { name: 'Proceso', code: '2' },
     
    ];
    const [selectPersona, setSelectPersona] = useState(null);
    const personas = [
        { name: "Juan Pérez Rodríguez", code: "JPR" },
        { name: "María Gómez Hernández", code: "MGH" },
        { name: "Carlos Sánchez López", code: "CSL" },
        { name: "Lucía Fernández Torres", code: "LFT" },
        { name: "Pedro Ramírez Díaz", code: "PRD" }
    ];
    return (
          
            
               <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <Dropdown value={selectPersona} onChange={(e) => setSelectPersona(e.value)} options={personas} optionLabel="name" placeholder="Seleciona Usuario" className="w-full md:w-14rem" />
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-flag"></i>
                        </span>
                        <Dropdown value={selectedPrioridad} onChange={(e) => setSelectedPrioridad(e.value)} options={prioridad} optionLabel="name" placeholder="Seleciona Prioridad" className="w-full md:w-14rem" />
                    </div>

                    <div className="p-inputgroup flex-1">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} />
                    </div>
                    
                    <div className="p-inputgroup flex-1">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} />
                    </div>

                    <div className="p-inputgroup flex-1">
                        <Button label="Submit" />
                    </div>

                </div>
            
        
    );
};

export default BusquedaActividad;