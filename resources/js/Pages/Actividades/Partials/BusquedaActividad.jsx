import React, { useEffect, useState, forwardRef, useImperativeHandle} from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';



// const BusquedaActividad = forwardRef(({ resultadoBusqueda, setLastPageUrl, setNextPageUrl, setTotalRegistros, setPaginaActual , setRegistros}, ref) => {
const BusquedaActividad = forwardRef(({setRegistros, setPaginaActual, setPerPage, setTotal }, ref) => {
    const [usuarios, setUsuarios] = useState([]);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    const [filtros, setFiltros] = useState({
        selectPersona: { name: "Todos", code: "*" },
        fecha1: null,
        fecha2: null,
        selectedPrioridad: null,
        selectedStatus: null,
    });

    // Formulario
    const [selectPersona, setSelectPersona] = useState({name: "Todos", code: "*"});
    const [fecha1, setFecha1] = useState(null)
    const [fecha2, setFecha2] = useState(null)
    const [selectedPrioridad, setSelectedPrioridad] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    // --------------------
    useEffect(()=>{
        obtenerCatUsuarios()
        definirFechas()
        setTimeout(async() => {
            const datos = {
                page: 1,
                selectPersona: selectPersona,
                fecha1: (fecha1===null)? new Date().toISOString().slice(0, 10) : fecha1,
                fecha2: (fecha2===null)? new Date().toISOString().slice(0, 10) : fecha2,
                selectedPrioridad: selectedPrioridad,
                selectedStatus: selectedStatus,
            }       
            await consultar(datos) 
        }, 1000);
    },[])


    const definirFechas = () => {
        setFecha1(new Date())
        setFecha2(new Date())
    }

    
    useEffect(()=>{
        if(date1){
            let fechaFormato1 = date1 ? date1.toISOString().slice(0, 10) : null;
            setFecha1(fechaFormato1)
        }
        if(date2){
            let fechaFormato2 = date2 ? date2.toISOString().slice(0, 10) : null;
            setFecha2(fechaFormato2)
        }
    },[date1, date2]);

    const obtenerCatUsuarios = async () =>{
        try {
            setTimeout( async() => {
                const response = await axios.get(route("listado.catalogos.detalle.usuarios"));     
                const {data,status }= response
                if(status == 200){
                  const listadoUsuarios = [
                        { name: "Todos", code: "*" },
                        ...data.map(item => ({
                            code: item.id,
                            name: item.name,
                        }))
                    ];
                    setUsuarios(listadoUsuarios)
                }                
            }, 800);  
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se logro cargar el Catalogo de Clientes",
                life: 3000,
            });
        }
    }
    const status = [
        {name:'Pendiente', code:'Pendiente'},
        {name:'Realizado', code:'Realizado'},
    ];
    const prioridad = [
        {name: 'Baja', code:'Baja'},
        {name: 'Media', code:'Media'},
        {name: 'Alta', code:'Alta'},
    ];

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página  
        const nuevosFiltros = {
            selectPersona,
            fecha1,
            fecha2,
            selectedPrioridad,
            selectedStatus,
        };

        // Guardar filtros sin página (la agregaremos luego)
        setFiltros(nuevosFiltros);
        await consultar({ ...nuevosFiltros, page: 1 });
    };

    const consultar = async (datos) =>{
        try {
            console.log("Estos son los datos",datos);
            
            const response = await axios.get(route("busqueda.actividades"), {params: datos});
            const {status} = response
            if (status === 200) {
                const {
                    data, 
                    current_page,// PAgina actual
                    per_page, // por pagina
                    total, // total de registros
                } = response.data;
                setRegistros(data)
                setPaginaActual(current_page)
                setPerPage(per_page)
                setTotal(total)
            }
                            
        } catch (error) {
            console.error(error);
            alert("Error")
                
        }
    }

    useImperativeHandle(ref, () => ({
        reloadListado(pagina = 1) {
            // Combina filtros actuales + nueva página
            const filtrosConPagina = {
                ...filtros,
                page: pagina
            };
            consultar(filtrosConPagina);
        }
    }));

    return (
        <div className="card">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto min-w-[250px]">
                        <label htmlFor="usuario" className="font-bold block mb-2">Usuario</label>
                        <Dropdown
                            inputId="usuario"
                            value={selectPersona}
                            onChange={(e) => setSelectPersona(e.value)}
                            options={usuarios}
                            optionLabel="name"
                            placeholder="Selecciona Usuario"
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
                  
                </div>
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
            </form>            
        </div>
    );
});

export default BusquedaActividad;
