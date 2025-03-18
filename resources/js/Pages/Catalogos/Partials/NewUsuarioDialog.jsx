import React, { Component, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from "primereact/dropdown";
import { useEffect } from 'react';
import { Password } from 'primereact/password';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';


const NewUsuarioDialog = ({reloadRegistros, mostrarModal, setMostrarModal, registro}) => {
    const toast = useRef(null);
    const [cargando, setCargando] = useState(false)
    const [visible, setVisible] = useState(false);
    const [catRoles, setCatRoles]= useState([])
    const [habilitaBtn, setHabilitaBtn] = useState(false)

    const [identyRegistro, setIdentyRegistro] = useState(null);
    const [nombre, setNombre] = useState('')
    const [email,setEmail] = useState('');
    const [rolAsc, setRolAsc] = useState(null)
    
    
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState("");

    const obtenerCotizaciones = async () => {
        try {     
            const response = await axios.get(route("catalogo.list.roles.sis"));
            const {status, data} = response;
            if(status===200){
                const formatData = data.map(item => ({name: item.name,code: item.id}));
                setCatRoles(formatData);
            }
            
        } catch (error) {
            console.error("Error al obtener cotizaciones:", error);
        }
    };

    useEffect(()=>{
        if(visible){
            obtenerCotizaciones()
        }
    },[visible])

    const handleConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
        validatePassword(password, e.target.value);
      };
    
    const validatePassword = (pass, confirm) => {
        if (pass && confirm && pass !== confirm) {
            setError("Las contraseñas no coinciden");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        // console.log("Datos enviados:", formData);
        if(error === ''){
            if(identyRegistro === null){
                almacenarRegistro()
            }else{
                actualizarRegistro()
            }
        }
        
    };
    const almacenarRegistro = async () =>{
        setCargando(true)
        const datos = {
            nombre: nombre,
            email: email,
            rolAsc: rolAsc,
            password: password,
            passwordConfirm: passwordConfirm,
        }
        try {
            const response = await axios.post(route("almacenar.usuario.nuevo"), datos);            
            const { data, status} = response
            if (status === 200) {
                
                
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `Agregado Correctamente`,
                    life: 3000,
                });
                limpiarFormulario()
                setVisible(false)
                reloadRegistros()
                setTimeout(() => {
                    setCargando(false)
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            setCargando(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se puede almacenar el cliente.. Intenta de nuevo",
                life: 3000,
            });
        }
    }

    const actualizarRegistro = async () =>{
        
        setCargando(true)
        const datos = {
            id:identyRegistro,
            nombre: nombre,
            email: email,
            rolAsc: rolAsc,
            password: password,
            passwordConfirm: passwordConfirm,
        }
        try {
            const response = await axios.post(route("actualizar.usuario.registrado"), datos);            
            const { data, status} = response
            if (status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: `${data.success}`,
                    life: 3000,
                });
                limpiarFormulario()
                setVisible(false)
                reloadRegistros()
                setTimeout(() => {
                    setCargando(false)
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            setCargando(false)
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No se puede almacenar el Usuario. Intenta de nuevo",
                life: 3000,
            });
        }
    }


    

    const limpiarFormulario = () =>{
        setCatRoles([])
        setNombre('');
        setEmail('');
        setRolAsc(null)
        setPassword('');
        setPasswordConfirm('');
        setError("");
    }


    useEffect(()=>{
        if(mostrarModal){
            setVisible(true)
            setCargando(true)
            const {email,id,name, roles} = registro
            console.log("Este lo seleciono", roles[0].id);
            
            const rolAsc = {
                code: roles[0].id,
                name: roles[0].name
            }
            setTimeout(() => {
                
                
                setIdentyRegistro(id)
                setNombre(name);
                setEmail(email);
                setRolAsc(rolAsc);
                setPassword('')
                setPasswordConfirm('')
                setError('')
                setCargando(false)
            }, 1000);
        }else{
            setVisible(false)
            setCargando(false)
        }

    },[mostrarModal]);
    return (
        <>
        
            <div className="text-right gap-2">
                <Button className='m-1' icon="pi pi-plus" rounded severity="info" aria-label="Favorite" tooltip="Nuevo Registro" tooltipOptions={{ position: 'left' }} onClick={() => setVisible(true)}/>
            </div>
            <div className="flex justify-content-center">
                <Dialog header="Usuario" visible={visible} maximizable style={{ width: '80vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    <form onSubmit={handleSubmit}>
                        {cargando &&(
                            <div className=" flex justify-content-center">
                                <ProgressSpinner />
                            </div>
                        )}
                        <Fieldset legend="Datos Generales">
                            <div className="flex flex-wrap gap-3 p-fluid">
                                <div className="flex-auto">
                                    <label htmlFor="nombre" className="font-bold block mb-2">Nombre</label>
                                    <InputText inputId="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="flex-auto">
                                    <label htmlFor="email" className="font-bold block mb-2">Correo Electronico</label>
                                    <InputText inputId="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="flex-auto">
                                    <label htmlFor="rolesAsc" className="font-bold block mb-2">Roles</label>
                                    <Dropdown value={rolAsc} onChange={(e) => setRolAsc(e.value)} options={catRoles} optionLabel="name" placeholder="Selecciona un rol" className="w-full md:w-14rem" />
                                </div>
                            </div>
                            <div className="text-center">
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            </div>
                            <div className="flex flex-wrap gap-3 p-fluid mt-2">

                                <div className="flex-auto">
                                    <label htmlFor="direccion" className="font-bold block mb-2">Contraseña</label>
                                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                                    {/* <InputText inputId="direccion" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                                </div>
                                <div className="flex-auto">
                                    <label htmlFor="confimr" className="font-bold block mb-2">Confirmar Contraseña</label>
                                    <Password value={passwordConfirm} toggleMask onChange={handleConfirmChange}/>
                                    {/* <InputText inputId="confimr" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} onChange={handleConfirmChange}/> */}
                                </div>                           
                            </div>
                            <div className="flex justify-content-center mt-3">
                                <Button label="Guardar" type="submit" disabled={habilitaBtn}/>
                            </div>
                        </Fieldset>
                    </form>
                </Dialog>
            </div>   
            <Toast ref={toast} />     
        </>
    );
    
}

export default NewUsuarioDialog;