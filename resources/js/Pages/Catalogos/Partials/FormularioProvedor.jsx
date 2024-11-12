import React, { Component } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

const FormularioProvedor = () =>  {    
    return (
        <>
            <form>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="abreviacion"  onChange={(e) => setValue(e.target.value)} invalid />
                            <label htmlFor="abreviacion">Abreviacion</label>
                        </FloatLabel>
                    </div>
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="nombre"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="telefono"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="telefono">Telefono</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="colonia"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="colonia">Colonia</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="direccion"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="direccion">Dirección</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <FloatLabel>
                            <InputText id="colonia"  onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="colonia">Colonia</label>
                        </FloatLabel>
                    </div>
                </div>
                
            </form>

        </>
    );
}

export default FormularioProvedor;