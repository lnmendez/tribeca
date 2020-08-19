import React from 'react'
import UserLogin from '../components/UsersLogin/UserLogin';
import GuestLogin from '../components/UsersLogin/GuestLogin';
const Login = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 card border-warning mt-4">
                    <div className="row justify-content-center">
                        {/*
                        <div className="col-md-6">
                            <UserLogin />
                        </div>
                        */}
                        <div className="col-12 col-lg-8">
                            <GuestLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
