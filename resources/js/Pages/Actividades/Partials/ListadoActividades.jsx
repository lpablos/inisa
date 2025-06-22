import React, { useRef, useState, useEffect} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Paginator } from 'primereact/paginator';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const ListadoActividades = () => {

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [text, setText] = useState('Generar y enviar el informe de ventas correspondiente a la semana actual al equipo de dirección.');

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const [responsable, setResponsable] = useState('');
    const [prioridad, setPrioridad] = useState(null);
    const [estatus, setEstatus] = useState(null);
    const [fecha, setFecha] = useState(null);

    const prioridades = [
        { label: 'Alta', value: 'alta' },
        { label: 'Media', value: 'media' },
        { label: 'Baja', value: 'baja' },
    ];

    const estatuses = [
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'Realizado', value: 'realizado' },
    ];


    return (

        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <span className="font-bold white-space-nowrap">20/06/2025 - <strong>Enviar reporte semanal de ventas</strong></span>
                            <Badge value="20/06/2025" className="ml-auto" />
                        </span>
                    }
                >
                    <div className="flex flex-column gap-3">
                        <div className="flex flex-wrap gap-3 mb-4">
                            {/* Responsable */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="responsable" className="font-bold block mb-2">Responsable</label>
                                <InputText
                                    id="responsable"
                                    value={responsable}
                                    onChange={(e) => setResponsable(e.target.value)}
                                    className="w-full"
                                    placeholder="Nombre del responsable"
                                />
                            </div>

                            {/* Prioridad */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="prioridad" className="font-bold block mb-2">Prioridad</label>
                                <Dropdown
                                    inputId="prioridad"
                                    value={prioridad}
                                    options={prioridades}
                                    onChange={(e) => setPrioridad(e.value)}
                                    placeholder="Selecciona Prioridad"
                                    className="w-full"
                                />
                            </div>

                            {/* Estatus */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="estatus" className="font-bold block mb-2">Estatus</label>
                                <Dropdown
                                    inputId="estatus"
                                    value={estatus}
                                    options={estatuses}
                                    onChange={(e) => setEstatus(e.value)}
                                    placeholder="Selecciona Estatus"
                                    className="w-full"
                                />
                            </div>

                            {/* Fecha */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="fecha" className="font-bold block mb-2">Fecha</label>
                                <Calendar
                                    inputId="fecha"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.value)}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                        </div>
                    </div>   
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
                    <div className="flex flex-wrap items-center gap-3 mb-4 p-4">
                        {/* Grupo: Search + InputText */}
                        <div className="p-inputgroup flex-1">
                            <Button icon="pi pi-search" label="Cotizacion"/>
                            <InputText placeholder="Vote" value='052025/001'/>
                            <Button icon="pi pi-eye" label="Visualizar"/>
                        </div>

                        {/* Botón Submit */}
                        <div>
                            <Button label="Actualizar" />
                        </div>
                    </div>

                </AccordionTab>
                {/* ------- */}
                     <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <span className="font-bold white-space-nowrap">20/06/2025 - <strong>Enviar reporte semanal de ventas</strong></span>
                            <Badge value="20/06/2025" className="ml-auto" />
                        </span>
                    }
                >
                    <div className="flex flex-column gap-3">
                        <div className="flex flex-wrap gap-3 mb-4">
                            {/* Responsable */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="responsable" className="font-bold block mb-2">Responsable</label>
                                <InputText
                                    id="responsable"
                                    value={responsable}
                                    onChange={(e) => setResponsable(e.target.value)}
                                    className="w-full"
                                    placeholder="Nombre del responsable"
                                />
                            </div>

                            {/* Prioridad */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="prioridad" className="font-bold block mb-2">Prioridad</label>
                                <Dropdown
                                    inputId="prioridad"
                                    value={prioridad}
                                    options={prioridades}
                                    onChange={(e) => setPrioridad(e.value)}
                                    placeholder="Selecciona Prioridad"
                                    className="w-full"
                                />
                            </div>

                            {/* Estatus */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="estatus" className="font-bold block mb-2">Estatus</label>
                                <Dropdown
                                    inputId="estatus"
                                    value={estatus}
                                    options={estatuses}
                                    onChange={(e) => setEstatus(e.value)}
                                    placeholder="Selecciona Estatus"
                                    className="w-full"
                                />
                            </div>

                            {/* Fecha */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="fecha" className="font-bold block mb-2">Fecha</label>
                                <Calendar
                                    inputId="fecha"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.value)}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                        </div>
                    </div>   
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
                    <div className="flex flex-wrap items-center gap-3 mb-4 p-4">
                        {/* Grupo: Search + InputText */}
                        <div className="p-inputgroup flex-1">
                            <Button icon="pi pi-search" label="Cotizacion"/>
                            <InputText placeholder="Vote" value='052025/001'/>
                            <Button icon="pi pi-eye" label="Visualizar"/>
                        </div>

                        {/* Botón Submit */}
                        <div>
                            <Button label="Actualizar" />
                        </div>
                    </div>

                </AccordionTab>
                {/* ----------- */}

                     <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <span className="font-bold white-space-nowrap">20/06/2025 - <strong>Enviar reporte semanal de ventas</strong></span>
                            <Badge value="20/06/2025" className="ml-auto" />
                        </span>
                    }
                >
                    <div className="flex flex-column gap-3">
                        <div className="flex flex-wrap gap-3 mb-4">
                            {/* Responsable */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="responsable" className="font-bold block mb-2">Responsable</label>
                                <InputText
                                    id="responsable"
                                    value={responsable}
                                    onChange={(e) => setResponsable(e.target.value)}
                                    className="w-full"
                                    placeholder="Nombre del responsable"
                                />
                            </div>

                            {/* Prioridad */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="prioridad" className="font-bold block mb-2">Prioridad</label>
                                <Dropdown
                                    inputId="prioridad"
                                    value={prioridad}
                                    options={prioridades}
                                    onChange={(e) => setPrioridad(e.value)}
                                    placeholder="Selecciona Prioridad"
                                    className="w-full"
                                />
                            </div>

                            {/* Estatus */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="estatus" className="font-bold block mb-2">Estatus</label>
                                <Dropdown
                                    inputId="estatus"
                                    value={estatus}
                                    options={estatuses}
                                    onChange={(e) => setEstatus(e.value)}
                                    placeholder="Selecciona Estatus"
                                    className="w-full"
                                />
                            </div>

                            {/* Fecha */}
                            <div className="flex-auto min-w-[250px]">
                                <label htmlFor="fecha" className="font-bold block mb-2">Fecha</label>
                                <Calendar
                                    inputId="fecha"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.value)}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                        </div>
                    </div>   
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
                    <div className="flex flex-wrap items-center gap-3 mb-4 p-4">
                        {/* Grupo: Search + InputText */}
                        <div className="p-inputgroup flex-1">
                            <Button icon="pi pi-search" label="Cotizacion"/>
                            <InputText placeholder="Vote" value='052025/001'/>
                            <Button icon="pi pi-eye" label="Visualizar"/>
                        </div>

                        {/* Botón Submit */}
                        <div>
                            <Button label="Actualizar" />
                        </div>
                    </div>

                </AccordionTab>
            </Accordion>
            <Paginator first={first} rows={rows} totalRecords={120}  onPageChange={onPageChange} />
        
        </div>
    );
};

export default ListadoActividades;