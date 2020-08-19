import React from 'react'
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import { setStore } from '../../redux/currentPurchase';
const Delivery = () => {
    const dispatch = useDispatch()
    const [validationForm, setValidationForm] = React.useState(false)
    const [stateError, setStateError] = React.useState("")
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.store_delivery = true
        dispatch(setStore(data))
        setValidationForm(true)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-2">
                            <label>Selecciona tu ciudad</label>
                            <select className="form-select" name="store_commune"
                                ref={register}>
                                <option value="2">Talca</option>
                                <option value="3">Rancagua</option>
                            </select>
                            <span className="text-danger text-small d-block mb-2">
                                {stateError}
                            </span>
                        </div>

                        <div className="form-group mb-2">
                            <label>Dirección</label>
                            <input type="text" className="form-control" name="store_address"
                                ref={register({
                                    required: { value: true, message: 'Debe ingresar la dirección' },
                                    maxLength: { value: 255, message: 'No más de 255 carácteres!' },
                                    minLength: { value: 4, message: 'Mínimo 4 carácteres' }
                                })} />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.store_address?.message}
                            </span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Observación de domicilio
                            </label>
                            <textarea className="form-control" name="store_address_obs"ref={register}>
                            </textarea>
                            <small className="form-text text-muted">
                                Ayudanos a llegar más rápido con nuestros productos
                            </small>
                        </div>
                        <button className="btn btn-warning" >Continuar</button>
                        {validationForm?<Redirect to="/confirm_shop"/>:null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Delivery
