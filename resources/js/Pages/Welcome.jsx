import { Link, Head } from "@inertiajs/react";
import {
    LayoutContext,
    LayoutProvider,
} from "@/Layouts/layout/context/layoutcontext.jsx";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import React, { useContext } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { layoutConfig } = useContext(LayoutContext);
    return (
        <>

            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Welcome" />
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="sm:fixed sm:top-0 sm:left-0 p-6">
                            <div className="flex align-items-center">
                                <img
                                    src={`/images/logo.jpeg`}
                                    width="100%"
                                    height="100"
                                    alt="logo"
                                    className="mr-3"
                                />

                                {/* {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )} */}
                            </div>
                        </div>

                        <div className="grid grid-nogutter surface-0 text-800">
                            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                                <section className="text-left max-w-3xl mx-auto px-6 py-12">
                                    <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
                                        Llevamos la energía donde más la
                                        necesitas
                                    </h1>





                                    <p style={{ color: "#e37816" }}  className="text-3xl font-bold leading-snug text-indigo-600 mb-6 text-brand-orange" >
                                        En Innovación Nacional de Ingeniería,
                                        contamos con más de 25 años de
                                        experiencia realizando instalaciones
                                        eléctricas precisas, confiables y
                                        seguras <br />
                                        en Xalapa, Veracruz.
                                    </p>

                                    <p className="text-gray-600 text-lg">
                                        Nuestro equipo está conformado por
                                        personal altamente calificado y
                                        certificado, listo para atender
                                        cualquier necesidad en reparación,
                                        instalación o asesoría técnica.
                                    </p>



                                    <p className="text-gray-600 text-lg">
                                        Nos especializamos en brindarte una
                                        atención personalizada, asegurándonos de
                                        que tomes la mejor decisión para tu
                                        proyecto.
                                    </p>
                                </section>
                            </div>
                            <div className="col-12 md:col-6 overflow-hidden">
                                {/* <video
                            src={`/images/video/promo.mp4`} // Ruta del video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
                        /> */}
                                <img
                                    src="/images/hero/logo_portada.webp"
                                    alt="hero-1"
                                    className="md:ml-auto block md:h-full"
                                    style={{
                                        clipPath:
                                            "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
