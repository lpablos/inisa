import React, { Component, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Checkbox } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";
import { AutoComplete } from "primereact/autocomplete";
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';


const FormItemDetalle = () => {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);
    const [ingredients, setIngredients] = useState([]);
    const [checked, setChecked] = useState(false);

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    


    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
          <div className="card">
            <div class="formgrid grid">
                <div class="field col-4">
                    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                    <label htmlFor="ingredient1" className="ml-2">Pertenece a un tomo</label>
                </div>
                <div class="field col-8">
                    <label htmlFor="temperature" className="font-bold block mb-2">Selecciona un Tomo</label>
                    <AutoComplete className='w-full' value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />

                    <label htmlFor="mile" className="font-bold block mb-2">Captura un Tomo</label>
                    <InputNumber className='w-full' inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
                </div>
            </div>
            <Divider />
            <h5>Costo de Materiales</h5>
            <div class="formgrid grid">
                <div class="field col-12">
                    <label htmlFor="percent" className="font-bold block mb-2">Descripcion</label>
                    <InputTextarea className="w-full" value={value} onChange={(e) => setValue(e.target.value)} rows={2} cols={30} />
                </div>               
            </div>
            <div class="formgrid grid">
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Unidad</label>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full md:w-14rem" />
                    
                </div>  
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Catidad</label>
                    <InputNumber placeholder="Cantidad" />
                </div>  
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario Sugerido</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Costo Unitario Sugerido" />
                    </div>
                    
                </div>  
                <div class="field col-4">
                    
                    <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Costo Unitario" />
                    </div>
                </div>  
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Subtotal" />
                    </div>
                </div>  
            </div>
            <Divider />
            <h5>Costo de Mano de Obra</h5>
            
           
            <div class="formgrid grid">
                
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario Sugerido</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Costo Unitario Sugerido" />
                    </div>
                    
                </div>  
                <div class="field col-4">
                    
                    <label htmlFor="percent" className="font-bold block mb-2">Costo Unitario</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Costo Unitario" />
                    </div>
                </div>  
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Subtotal" />
                    </div>
                </div>  
            </div>
            <Divider />
            <h5>M.O./MATER.</h5>
            <div class="formgrid grid">
                <div class="field col-4">
                    <label htmlFor="percent" className="font-bold block mb-2">Subtotal</label>
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Costo Unitario Sugerido" />
                    </div>
                    
                </div>  
            </div>
            <Divider />
            <h5>Agregar algun comentario</h5>
            <div class="formgrid grid">
                <div class="field col-12">
                    <label htmlFor="percent" className="font-bold block mb-2">Descripcion</label>
                    <InputTextarea className="w-full" value={value} onChange={(e) => setValue(e.target.value)} rows={2} cols={30} />
                </div>               
            </div>
        </div>
    );
    
}

export default FormItemDetalle;