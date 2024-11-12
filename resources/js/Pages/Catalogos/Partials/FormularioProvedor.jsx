import React, { Component } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
// import { FloatLabel } from "primereact/floatlabel";

const FormularioProvedor = () =>  {    
    return (
        <>
            <form>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        {/* <FloatLabel>
                            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </FloatLabel> */}
                    </div>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Nombre" />
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Telefono" />
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Username" />
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Price" />
                        <span className="p-inputgroup-addon">.00</span>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">www</span>
                        <InputText placeholder="Website" />
                    </div>
                </div>
                
            </form>

        </>
    );
}

export default FormularioProvedor;