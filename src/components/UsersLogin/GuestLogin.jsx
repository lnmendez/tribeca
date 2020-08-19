import React from 'react'
import guestImg from '../../assets/img/anonymous.svg'
import { useForm } from "react-hook-form";
import { userGuestValidation } from '../../redux/userLoginDucks';
import { setUser } from '../../redux/currentPurchase';
import { useDispatch } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
const GuestLogin = () => {
    const [validation, setValidation] = React.useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        setValidation(true)   
        dispatch(userGuestValidation(data))
        dispatch(setUser(data))
    }
    return (
        <div className="p-5">
            {validation? <Redirect to="/select_dispatch"/>:null}
            <div className="text-center">
                <img src={guestImg} height="80" alt="" />
                <h4>Ingresa como invitado</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label >Nombre</label>
                    <input type="text" className="form-control" name="guest_name"
                        ref={register({
                            required: { value: true, message: 'Nombre es requerido' },
                            maxLength: { value: 100, message: 'No más de 100 carácteres!' },
                            minLength: { value: 4, message: 'Mínimo 4 carácteres' },
                            pattern: { value: /^[a-zA-Z]+$/, message: 'Solo se aceptan letras' }
                        })} />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.guest_name?.message}
                    </span>
                </div>
                <div className="form-group mb-2">
                    <label>Correo electrónico</label>
                    <input type="email" className="form-control" name="guest_email"
                        ref={register({
                            required: { value: true, message: 'Email es requerido' },
                            maxLength: { value: 255, message: 'No más de 255 carácteres!' },
                            minLength: { value: 3, message: 'Mínimo 4 carácteres' }
                        })} />
                    <small className="form-text text-muted">Ejemplo: usuario@dominio.cl</small>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.guest_email?.message}
                    </span>
                </div>
                <div className="form-group mb-2">
                    <label>Teléfono</label>
                    <input type="phone" className="form-control" name="guest_phone"
                        ref={register({
                            required: { value: true, message: 'Numero teléfonico es requerido' },
                            maxLength: { value: 9, message: 'No más de 9 carácteres!' },
                            minLength: { value: 9, message: 'Mínimo 9 carácteres' },
                            pattern: { value: /^[0-9]+$/, message: 'Solo se aceptan números' }
                        })} />
                    <small className="form-text text-muted mb-2">Ingresa 9 digitos</small>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.guest_phone?.message}
                    </span>

                </div>
                {validation? 
                <Link to='/select_dispatch'>             
                <button type="submit" className="btn btn-outline-warning text-dark btn-block">
                    Continuar como invitado
                </button>
                </Link>
                :
                <button type="submit" className="btn btn-outline-warning text-dark btn-block">
                Continar como invitado
                </button>   
                }

            </form>
        </div>
    )
}

export default GuestLogin