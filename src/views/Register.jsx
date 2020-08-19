import React from 'react'
import logo from '../assets/img/logo_tribeca.png';

const Register = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <img src={logo} height="80" alt="" />
                        <h4>!Bienvenido a Tribeca!</h4>
                    </div>
                    <form>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Nombre</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                            placeholder="Nombre"/>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                placeholder="Correo electrónico" />
                            <small id="emailHelp" className="form-text text-muted">Ejemplo: usuario@dominio.cl</small>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Teléfono</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                placeholder="Teléfono" />
                            <small id="emailHelp" className="form-text text-muted">Ingresa 9 digitos</small>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Domicilio</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                placeholder="Domicilio" />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Confirmar contraseña</label>
                            <input type="password" className="form-control" placeholder="Confirmar contraseña" />
                        </div>
                        <button type="submit" className="btn btn-warning btn-block">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
