import React from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

const ConfirmarEliminacion = ({ onConfirm, onCancel }) => {
    return (
        <div className="flex flex-column align-items-left" style={{ flex: '1' }}>
            <div className="flex align-items-center gap-2">
                <Avatar icon="pi pi-exclamation-triangle" shape="circle" className="mr-2" />
                <span className="font-bold text-900">Confirmación de duplicado de cotizacion</span>
            </div>
            <div className="font-medium text-lg my-3 text-900">¿Desea duplicar esta cotizacion?</div>
            <div className="flex gap-2">
                <Button
                    label="Confirmar"
                    icon="pi pi-check"
                    className="p-button-sm p-button-danger"
                    onClick={onConfirm}
                />
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    className="p-button-sm p-button-secondary"
                    onClick={onCancel}
                />
            </div>
        </div>
    );
};

export default ConfirmarEliminacion;
