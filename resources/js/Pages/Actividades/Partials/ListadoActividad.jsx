import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { VirtualScroller } from 'primereact/virtualscroller';

const ListadoActividad = () => {
     const [items, setItems] = useState([]);

    useEffect(() => {
        // Simular 15 registros con título y texto breve
        const data = Array.from({ length: 15 }, (_, i) => ({
            titulo: `Título ${i + 1}`,
            detalle: `Este es un texto breve del documento número ${i + 1}`
        }));
        setItems(data);
    }, []);

    // Template para mostrar cada ítem con salto de línea
    const itemTemplate = (item, options) => {
        return (
            <div
                style={{
                    padding: '10px',
                    borderBottom: '1px solid #ccc',
                    lineHeight: '1.4'
                }}
                className={options.className}
            >
                <strong>{item.titulo}</strong><br />
                <span>{item.detalle}</span>
            </div>
        );
    };
    return (
        <VirtualScroller
            items={items}
            itemSize={50}
            itemTemplate={itemTemplate}
            className="border-1 surface-border border-round cursor-pointer"
            style={{ width: '300px', height: '65vh' }}
        />
    );
};

export default ListadoActividad;