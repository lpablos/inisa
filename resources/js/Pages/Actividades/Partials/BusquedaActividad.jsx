import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

export default function BusquedaActividad() {
    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    const [selectedPrioridad, setSelectedPrioridad] = useState(null);
    const prioridad = [
        { name: 'Realizado', code: '1' },
        { name: 'Pendiente', code: '2' },
    ];

    const [selectedStatus, setSelectedStatus] = useState(null);
    const status = [
        { name: 'Normal', code: '1' },
        { name: 'Urgente', code: '2' },
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
        <div className="card">
            {/* Fila 1 */}
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto min-w-[250px]">
                    <label htmlFor="usuario" className="font-bold block mb-2">Usuario</label>
                    <Dropdown
                        inputId="usuario"
                        value={selectPersona}
                        onChange={(e) => setSelectPersona(e.value)}
                        options={personas}
                        optionLabel="name"
                        placeholder="Selecciona Usuario"
                        className="w-full"
                    />
                </div>
                <div className="flex-auto min-w-[250px]">
                    <label htmlFor="estatus" className="font-bold block mb-2">Estatus</label>
                    <Dropdown
                        inputId="estatus"
                        value={selectedPrioridad}
                        onChange={(e) => setSelectedPrioridad(e.value)}
                        options={prioridad}
                        optionLabel="name"
                        placeholder="Selecciona Estatus"
                        className="w-full"
                    />
                </div>
                <div className="flex-auto min-w-[250px]">
                    <label htmlFor="prioridad" className="font-bold block mb-2">Prioridad</label>
                    <Dropdown
                        inputId="prioridad"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.value)}
                        options={status}
                        optionLabel="name"
                        placeholder="Selecciona Prioridad"
                        className="w-full"
                    />
                </div>
            </div>

            {/* Fila 2 */}
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto min-w-[250px]">
                    <label htmlFor="fechainicio" className="font-bold block mb-2">Fecha inicio</label>
                    <Calendar
                        inputId="fechainicio"
                        value={date1}
                        onChange={(e) => setDate1(e.value)}
                        dateFormat="dd/mm/yy"
                        className="w-full"
                        showIcon
                    />
                </div>
                <div className="flex-auto min-w-[250px]">
                    <label htmlFor="fechafin" className="font-bold block mb-2">Fecha fin</label>
                    <Calendar
                        inputId="fechafin"
                        value={date2}
                        onChange={(e) => setDate2(e.value)}
                        dateFormat="dd/mm/yy"
                        className="w-full"
                        showIcon
                    />
                </div>
                <div className="min-w-[250px]  items-end p-4">
                    <Button label="Buscar" />
                </div>
            </div>
        </div>
    );
}
