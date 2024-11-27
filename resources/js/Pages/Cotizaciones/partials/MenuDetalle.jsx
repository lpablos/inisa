import React, { Component, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import DialogDetalleCotizacion from './DialogDetalleCotizacion';

const MenuDetalle = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Agregar',
            icon: 'pi pi-pencil',
            command: ()=>{
                openDialog()
            },
        }
    ];
    
    return (
        <>
            <Menubar model={items} />
            <DialogDetalleCotizacion showDialog={dialogVisible} closeDialog={closeDialog}/>
        </>
        
    );
    
}

export default MenuDetalle;