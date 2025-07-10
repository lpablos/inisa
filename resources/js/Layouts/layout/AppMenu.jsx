import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const { auth } = usePage().props;
    const rol = auth?.user?.rol || '';
    // console.log("Este es el rol",window?.user?.roles);
    
    // window.user = @json(auth()->user());
    // console.log(window.user);

    const model = [
        {
            label: "Menú",
            items: [
                {
                    label: "Panel",
                    icon: "pi pi-fw pi-home",
                    to: route("dashboard"),
                },
                // { label: 'Button', icon: 'pi pi-fw pi-id-card', to: route('button') },
                {
                    label: "Cotizaciones",
                    icon: "pi pi-fw pi-folder-open",
                    to: route("cotizacion.show.index"),
                },
                {
                    label: "Catalogos",
                    icon: "pi pi-fw pi-tags",
                    to: route("catalogo.gral.index"),
                },
                {
                    label: "Historico",
                    icon: "pi pi-fw pi-eye-slash",
                    visible: rol === 'AdministradorSis' || rol === 'Direccion' || rol === 'Aux Dirección',  // Mostrar solo a esos roles
                    to: route("logs.historico.index"),
                },
                 {
                    label: "Actividades",
                    icon: "pi pi-fw pi-tags",
                    to: route("activiades.index"),
                },
                // Solo mostrar "Actividades" si el usuario es auxiliar de jefe o jefe
                // {
                //     label: "Actividades",
                //     icon: "pi pi-fw pi-tags",
                //     to: route("logs.actividades.index"),
                //     visible: window?.user?.roles?.some((r) =>
                //         ["AdministradorSis", "Aux Dirección"].includes(r.name)
                //     ),
                // },
            ],
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? (
                        <AppMenuitem
                            item={item}
                            root={true}
                            index={i}
                            key={item.label}
                        />
                    ) : (
                        <li className="menu-separator"></li>
                    );
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
