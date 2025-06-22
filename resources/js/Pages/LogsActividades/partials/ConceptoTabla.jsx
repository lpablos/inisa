import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const ConceptoTabla = () => {
    const [logsActividades, setlogsActividades] = useState([]);

    useEffect(() => {
        const obtenerlogsActividades = async () => {
            try {
                const response = await axios.get(
                    route("logs.historico.list")
                );
                const { logsActividades } = response.data;
                // console.log(logsActividades, response.data); // <-- Esto te muestra los campos
                setlogsActividades(response.data);
            } catch (error) {
                setlogsActividades([]);
            }
        };
        obtenerlogsActividades();
    }, []);

    return (
        <div className="card">
            <DataTable
                value={logsActividades}
                paginator
                rows={40}
                size={"small"}
            >
                {/* <Column
                    field="descrcion"
                    header="Descripción"
                    headerStyle={{ textAlign: "center" }}
                /> */}
                <Column field="causer.email" header="Email" headerStyle={{ textAlign: "center" }}/>
                <Column field="causer.name" header="Nombre"  headerStyle={{ textAlign: "center" }}/>
                <Column field="description" header="Descripción" headerStyle={{ textAlign: "center" }}/>
                <Column field="properties.modulo" header="Módulo"  headerStyle={{ textAlign: "center" }}/>
                <Column field="fecha_formateada" header="Fecha y hora de consulta"  headerStyle={{ textAlign: "center" }}/>

            </DataTable>
        </div>
    );
};

export default ConceptoTabla;
