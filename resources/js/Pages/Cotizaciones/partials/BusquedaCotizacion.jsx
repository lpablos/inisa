import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const BusquedaCotizacion = () =>{
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className="p-inputgroup md:w-17rem ">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Filtro Estatus" className="w-full md:w-17rem" />
            <Button icon="pi pi-search" className="p-button-warning" />
        </div>
        
    );
    
}

export default BusquedaCotizacion;