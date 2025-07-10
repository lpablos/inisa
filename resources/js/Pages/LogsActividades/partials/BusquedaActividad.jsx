import React, { useEffect, useState, useRef} from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';




const BusquedaActividad = ({setlogsActividades}) => {
  
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const handleSubmit = async (e) => {
        e.preventDefault();
        consultarRegistros()
    };

    useEffect(()=>{
        setTimeout(() => {
            consultarRegistros()           
            
        }, 1000);
    },[])

    const consultarRegistros = async () => {
        setLoading(true)
        const valido = valRangoFechas();
        if (valido) {
            const datos ={
                fecha_inicio: date1.toISOString().split('T')[0],
                fecha_fin: date2.toISOString().split('T')[0],
            }
            try {
                const response = await axios.get(route("logs.historico.list"),{
                    params: datos
                });
                const { data, status} = response
                if (status === 200) {
                    setLoading(false)  
                    setlogsActividades(data)
                    if(data.length == 0){
                        toast.current.show({
                           severity: "info",
                           summary: "No existen registros",
                           detail: "No sen encontraron registros, intenta con un rango de fechas distintas",
                           life: 5000,
                       });            
                    }  
                }
            } catch (error) {
                console.error(error);
                setLoading(false)
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Error al consultar los historicos",
                    life: 3000,
                });
                setlogsActividades([]);
            }
        }{
            setLoading(false)
        }
    
    };


    useEffect(() => {
      valRangoFechas()
    }, [date1, date2]);


    const valRangoFechas = () => {
        let validacion = true;
        if (date1 > date2) {
            toast.current.show({
                severity: "warn",
                summary: "Validación de rango de fechas",
                detail: "La Fecha de inicio no puede ser mayor a la Fecha Fin",
                life: 3000,
            });
            validacion = false;
        }
        if (date1 === null || date1 === '') {
            toast.current.show({
                severity: "warn",
                summary: "Validación Fecha Inicio",
                detail: "La Fecha Inicio tiene que tener un valor definido",
                life: 3000,
            });
            validacion = false;
        }

        if (date2 === null || date2 === '') {
            toast.current.show({
                severity: "warn",
                summary: "Validación Fecha Fin",
                detail: "La Fecha Fin tiene que tener un valor definido",
                life: 3000,
            });
            validacion = false;
        }
        return validacion;
    }


    
    


    return (
        <div className="card">
            <Toast ref={toast} />
            <form action="" onSubmit={handleSubmit}>
               
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
                        <Button type="submit" loading={loading} label="Buscar" />
                    </div>
                </div>
            </form>            
        </div>
    );
};

export default BusquedaActividad;
