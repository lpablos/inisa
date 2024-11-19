import React from "react";
import { Dropdown } from "primereact/dropdown";

const SelectorFilter = ({
    value,
    onChange,
    options,
    optionLabel = "name",
    placeholder = "Select an Option",
    valueTemplate,
    itemTemplate,
    className = "w-full md:w-14rem"
}) => {
    return (
        <Dropdown
            value={value}
            onChange={onChange}
            options={options}
            optionLabel={optionLabel}
            placeholder={placeholder}
            filter
            valueTemplate={valueTemplate}
            itemTemplate={itemTemplate}
            className={className}
        />
    );
};

export default SelectorFilter;
