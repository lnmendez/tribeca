import React from 'react'
import logo from '../../assets/img/logo_tribeca.png';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/userLoginDucks';

const UserLogin = () => {
    const dispatch = useDispatch()
    const [validation, setValidation] = React.useState(false)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        setValidation(true)
        console.log(data)
        // dispatch(userGuestValidation(data))
        dispatch(userLogin(data))
    }
    return (
        <div className="p-5">
            <div className="text-center">
                <img src={logo} height="80" alt="" />
                <h4>Ingresa con tu cuenta</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label >Correo electrónico</label>
                    <input type="email" name="user_name" className="form-control" 
                        ref={register({ required: { value: true, message: 'Email es requerido' } })} />
                    <small className="form-text text-muted">Ejemplo: usuario@dominio.cl</small>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.guest_email?.message}
                    </span>
                </div>
                <div className="form-group mb-2">
                    <label >Contraseña</label>
                    <input type="password" name="user_password" className="form-control"
                        ref={register({
                            required: { value: true, message: 'Contraseña es requerida' },
                            minLength: { value: 8, message: 'Mínimo 8 carácteres' }
                        })} />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.guest_email?.message}
                    </span>
                </div>

                <button type="submit" className="btn btn-warning btn-block">Iniciar sesión</button>
                <button type="submit" className="btn btn-white border-warning btn-block">Registrar</button>

            </form>
        </div>
    )
}

export default UserLogin
