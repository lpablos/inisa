import React from "react";
import { Dropdown } from "primereact/dropdown";

const SelectorFilter = ({
    value, // El valor seleccionado
    onChange, // Función para manejar cambios
    options, // Lista de opciones
    optionLabel = "name", // Nombre de la propiedad que se mostrará
    placeholder = "Select an Option", // Placeholder del selector
    valueTemplate, // Plantilla para el valor seleccionado
    itemTemplate, // Plantilla para las opciones
    className = "w-full md:w-14rem", // Clases CSS
}) => {
    // Plantilla predeterminada para mostrar el valor seleccionado
    const defaultValueTemplate = (option) => {
        if (option) {
            return (
                <span>
                    <strong>{option[optionLabel]}</strong>
                </span>
            );
        }
        return <span>{placeholder}</span>;
    };

    // Plantilla predeterminada para mostrar cada opción
    const defaultItemTemplate = (option) => {
        return (
            <span>
                {option[optionLabel]}
            </span>
        );
    };

    return (
        <Dropdown
            value={value} // Valor seleccionado
            onChange={onChange} // Manejar cambios
            options={options} // Opciones del selector
            optionLabel={optionLabel} // Campo a mostrar como etiqueta
            placeholder={placeholder} // Placeholder
            filter // Activar el filtro
            valueTemplate={valueTemplate || defaultValueTemplate} // Plantilla del valor seleccionado
            itemTemplate={itemTemplate || defaultItemTemplate} // Plantilla de las opciones
            className={className} // Clases CSS
        />
    );
};

export default SelectorFilter;
