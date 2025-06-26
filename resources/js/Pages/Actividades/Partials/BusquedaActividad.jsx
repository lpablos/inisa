import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

export default function BusquedaActividad() {
    const [usuarios, setUsuarios] = useState([]);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    // Formulario
    const [selectPersona, setSelectPersona] = useState({name: "Todos", code: "*"});
    const [fecha1, setFecha1] = useState()
    const [fecha2, setFecha2] = useState()
    const [selectedPrioridad, setSelectedPrioridad] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    // --------------------
    useEffect(()=>{
        obtenerCatUsuarios()
    },[])

    
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
            // setLoading(true)
            // setDesabilitar(true)

            // axios.get('/api/busqueda', {
            // params: {
            //     page: 2,
            //     selectPersona: { code: "3" },
            //     fecha1: "2025-06-25",
            //     fecha2: "2025-06-26",
            //     selectedPrioridad: { code: "Alta" },
            //     selectedStatus: { code: "Pendiente" },
            // }
            // }); 

            const datos = {
                page: 1,
                selectPersona: selectPersona,
                fecha1:fecha1,
                fecha2:fecha2,
                selectedPrioridad: selectedPrioridad,
                selectedStatus: selectedStatus,
            }
            try {
                const response = axios.get(route("busqueda.actividades"), {
                                    params: datos
                                });
                console.log("Esta es la respuesta", response);
                                
            } catch (error) {
                console.error(error);
                alert("Error")
                   
            }

            /*try {
                const response = await axios.get(route("busqueda.actividades"), datos);            
                console.log("Este es el response ", response);*/
                
                // const { data, status} = response
                // console.log("Esto es", response);
                
                // if (status === 200) {
                //     toast.current.show({
                //         severity: "success",
                //         summary: "Success",
                //         detail: `${data.success}`,
                //         life: 3000,
                //     });
                //     limpiarFormulario()
                //     setVisible(false)
                //     setDesabilitar(false)
                //     setTimeout(() => {
                //         setLoading(false)
                //     }, 1000);

               
                // }
            //} catch (error) {
                // console.error(error);
                // setLoading(false)
                // toast.current.show({
                //     severity: "error",
                //     summary: "Error",
                //     detail: "Error al registrar la actividad",
                //     life: 3000,
                // });
                // setDesabilitar(false)
            //}
        };


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
}
