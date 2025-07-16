import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';
import {Menu} from 'primereact/menu';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {LayoutContext} from '@/Layouts/layout/context/layoutcontext';
import Layout from "@/Layouts/layout/layout.jsx";
import DashboardInfoCard from "@/Components/DashboardInfoCard.jsx";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const toast = useRef(null);
    const [products, setProducts] = useState([]);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [lineOptions, setLineOptions] = useState({});
    const {layoutConfig} = useContext(LayoutContext);

    const [loading, setLoading] = useState(false)
    const [estadisticoCotizaciones, setEstadisticoCotizaciones] = useState([]);
    
    const recuadroIem = estadisticoCotizaciones.map(estadistica=>
        <DashboardInfoCard title="Cotizaciones"
                value={'Registros'+estadistica.total+' = '+estadistica.costo}
                icon="chart-line"
                iconColor="blue"
                mostrarBoto="false"
                descriptionText={estadistica.descripcion}
                key={estadistica.id}
                >
                    
        </DashboardInfoCard>
    )

    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    useEffect(()=>{
        resumenCotizaciones()
    },[])

    const resumenCotizaciones = async () =>{
        setLoading(true)
        try {
            setTimeout( async() => {
                const response = await axios.get(route("estadisticos.resumen.cotizaciones"));        
                const {data,status }= response
                if(status === 200){
                    setEstadisticoCotizaciones(data)
                    setLoading(false)
                }              
            }, 800);            
            
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se logro obtener el resumen de estadisticos",
                life: 3000,
            });
        }
    }

    return (
        <Layout>
            <Toast ref={toast} />
            {loading &&(
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            )}
            <div className="grid">
                {recuadroIem}
               
             

                {/* <div className="col-12 xl:col-6">
                    <div className="card">
                        <h5>Sales Overview</h5>
                        <Chart type="line" data={lineData} options={lineOptions}/>
                    </div>
                </div> */}
{/* 
                <div className="col-12 xl:col-6">
                    <div className="card">
                        <div className="flex justify-content-between align-items-center mb-5">
                            <h5>Best Selling Products</h5>
                            <div>
                                <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain"
                                        onClick={(event) => menu1.current?.toggle(event)}/>
                                <Menu
                                    ref={menu1}
                                    popup
                                    model={[
                                        {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                                        {label: 'Remove', icon: 'pi pi-fw pi-minus'}
                                    ]}
                                />
                            </div>
                        </div>
                        <ul className="list-none p-0 m-0">
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                                    <div className="mt-1 text-600">Clothing</div>
                                </div>
                                <div className="mt-2 md:mt-0 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-orange-500 h-full" style={{width: '50%'}}/>
                                    </div>
                                    <span className="text-orange-500 ml-3 font-medium">%50</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                                    <div className="mt-1 text-600">Accessories</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                                    </div>
                                    <span className="text-cyan-500 ml-3 font-medium">%16</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                                    <div className="mt-1 text-600">Accessories</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-pink-500 h-full" style={{width: '67%'}}/>
                                    </div>
                                    <span className="text-pink-500 ml-3 font-medium">%67</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                                    <div className="mt-1 text-600">Office</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-green-500 h-full" style={{width: '35%'}}/>
                                    </div>
                                    <span className="text-green-500 ml-3 font-medium">%35</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </Layout>
    );
};

export default Dashboard;

