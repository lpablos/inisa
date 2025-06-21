import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import { Link } from "@inertiajs/react";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

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
<<<<<<< HEAD
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
                // Solo mostrar "Actividades" si el usuario es auxiliar de jefe o jefe
                {
                    label: "Actividades",
                    icon: "pi pi-fw pi-tags",
                    to: route("logs.actividades.index"),
                    visible: window?.user?.roles?.some((r) =>
                        ["AdministradorSis", "Aux Dirección"].includes(r.name)
                    ),
                },
            ],
=======
                { label: 'Cotizaciones', icon: 'pi pi-fw pi-folder-open', to: route('cotizacion.show.index') },
                { label: 'Actividades', icon: 'pi pi-fw pi-calendar-times', to: route('activiades.index') },
                { label: 'Catalogos', icon: 'pi pi-fw pi-tags', to: route('catalogo.gral.index') },
                
            ]
>>>>>>> 52c059853619695da261950edfe6dab5127e7ad9
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
