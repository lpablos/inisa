import React, { Component, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";

const TablasCatalogos = ({
    opMostrar,
    data,
    eliminar,
    shoAgregar,
    updateRegistro,
}) => {
    const [opcionTabla, setOpcionTabla] = useState(0);
    const [registros, setRegistros] = useState([]);
    const [nombreTabla, setNombreTabla] = useState("");

    const selecionTabla = (opMostrar) => {
        switch (opMostrar) {
            case "provedores":
                setOpcionTabla(1);
                break;
            case "departamentos":
                setOpcionTabla(2);
                break;
            case "clientes":
                setOpcionTabla(3);
                break;
            case "unidadesMedidas":
                setOpcionTabla(4);
                break;
            case "usuarios":
                setOpcionTabla(5);
                break;
            case "datosEmpresa":
                setOpcionTabla(6);
                break;
            default:
                setOpcionTabla(0);
                break;
        }
    };

    useEffect(() => {
        selecionTabla(opMostrar);
        setNombreTabla(opMostrar);
    }, [opMostrar]);

    useEffect(() => {
        console.log("Aqui son los datos", data);
        if (data.length > 0) {
            setRegistros(data);
        }
    }, [data]);

    const opcionesTemplate = (registros) => {
        return (
            <>
                <Button
                    value={registros.id}
                    label="Detalle / Actualizar"
                    severity="Editar"
                    onClick={() => updateRegistro(registros.id)}
                />
                <Button
                    value={registros.id}
                    label="Eliminar"
                    severity="danger"
                    onClick={() => eliminar(registros.id)}
                />
            </>
        );
    };




    return (
        <>
            <div className="flex gap-3 mb-4">
                <Button
                    label="Registrar"
                    className="ml-auto"
                    onClick={() => shoAgregar()}
                />
            </div>

            {opcionTabla == 1 && (
                // Este es la tabla para Provedores
                <DataTable value={registros} tableStyle={{ minWidth: "50rem" }}>
                    <Column field="abreviacion" header="Abreviación"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="telefono" header="Telefono"></Column>
                    <Column header="Opciones" body={opcionesTemplate}></Column>
                </DataTable>
            )}
            {opcionTabla == 2 && (
                // Este es la tabla para Departamentos
                <DataTable value={registros} tableStyle={{ minWidth: "50rem" }}>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column header="Opciones" body={opcionesTemplate}></Column>
                </DataTable>
            )}
            {opcionTabla == 3 && (
                // Este es la tabla para clientes
                <DataTable value={registros} tableStyle={{ minWidth: "50rem" }}>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="abreviacion" header="Abreviación"></Column>
                    <Column field="telefono" header="Telefono"></Column>
                    <Column field="ext" header="Ext"></Column>
                    <Column header="Opciones" body={opcionesTemplate}></Column>
                </DataTable>
            )}

            {opcionTabla == 4 && (
                // Este es la tabla para unidadesMedidas
                <DataTable value={registros} tableStyle={{ minWidth: "100%" }}>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="abreviatura" header="Abreviatura"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                    <Column
                        header="Opciones"
                        body={opcionesTemplate}
                    ></Column>
                </DataTable>
            )}

            {opcionTabla == 5 && (
                // Este es la tabla para clientes
                <DataTable value={registros} tableStyle={{ minWidth: "100%" }}>
                    <Column field="name" header="Nombre"></Column>
                    <Column field="email" header="Correo"></Column>
                    <Column
                        header="Opciones"
                        body={opcionesTemplate}
                    ></Column>
                </DataTable>
            )}

            {opcionTabla == 6 && (
                // Este es la tabla para Empresa
                <DataTable value={registros} tableStyle={{ minWidth: "100%" }}>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                    <Column field="logotipo" header="Logotipo"></Column>
                    <Column field="direccion" header="Direccion"></Column>
                    <Column field="colonia" header="Colonia"></Column>
                    <Column field="codigo_postal" header="CP"></Column>
                    <Column field="telefono1" header="Tel 1"></Column>

                    <Column
                        field="telefono_urgencias12"
                        header="Tel urgencias 2"
                    ></Column>
                    <Column
                        header="Opciones"
                        body={opcionesTemplate}
                    ></Column>
                </DataTable>
            )}
        </>
    );
};

export default TablasCatalogos;
