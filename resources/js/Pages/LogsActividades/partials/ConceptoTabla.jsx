import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import BusquedaActividad from "./BusquedaActividad";

const ConceptoTabla = () => {
    const [logsActividades, setlogsActividades] = useState([]);
    return (
        <>
            <BusquedaActividad setlogsActividades={setlogsActividades}/>
            <div className="card">
                <DataTable
                    value={logsActividades}
                    paginator
                    rows={40}
                    size={"small"}
                >
                    <Column field="causer.email" header="Email" headerStyle={{ textAlign: "center" }}/>
                    <Column field="causer.name" header="Nombre"  headerStyle={{ textAlign: "center" }}/>
                    <Column field="description" header="Descripción" headerStyle={{ textAlign: "center" }}/>
                    <Column field="properties.modulo" header="Módulo"  headerStyle={{ textAlign: "center" }}/>
                    <Column field="fecha_formateada" header="Fecha y hora de consulta"  headerStyle={{ textAlign: "center" }}/>

                </DataTable>
            </div>
        </>
    );
};

export default ConceptoTabla;
