import React from "react";
import { Button } from 'primereact/button';

export default function DashboardInfoCard({ title, value, icon = '', iconColor = '', descriptionValue = '', descriptionText = '', clickOpt, valueTitle='', mostrarBoto='true' }) {
    const iconClass = `pi pi-${icon} text-${iconColor}-500 text-xl`;
    const iconBackgroundClass = `flex align-items-center justify-content-center bg-${iconColor}-100 border-round`;

    return (
        <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-500 font-medium mb-3">{title}</span>
                        <div className="text-900 font-medium text-xl text-center">{value}</div>
                    </div>
                    <div className={iconBackgroundClass}
                         style={{width: '2.5rem', height: '2.5rem'}}>
                        <i className={iconClass} />
                    </div>
                </div>
                <span className="text-green-500 font-medium">{ descriptionValue}</span>
                <span className="text-500"> {descriptionText}</span>
                {mostrarBoto == 'true' && (
                    <div className="mt-3 flex flex-column align-items-center">
                        <Button label="Detalles" severity="Primary" size="small" onClick={()=>clickOpt(valueTitle)} raised/>
                    </div>
                )}
            </div>
        </div>
    );
}
