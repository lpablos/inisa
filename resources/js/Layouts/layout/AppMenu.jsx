import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import {Link} from "@inertiajs/react";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: 'Menú',
            items: [
                { label: 'Panel', icon: 'pi pi-fw pi-home', to: route('dashboard') },
                // { label: 'Button', icon: 'pi pi-fw pi-id-card', to: route('button') },
                { label: 'Cotizaciones', icon: 'pi pi-fw pi-folder-open', to: route('cotizacion.show.index') },
                { label: 'Catalogos', icon: 'pi pi-fw pi-tags', to: route('catalogo.gral.index') },
                
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
