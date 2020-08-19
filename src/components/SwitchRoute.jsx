import React from 'react'
import { Switch as SwitchRouter, Route } from 'react-router-dom';
import Home from '../views/Home';
import Cart from '../views/Cart';
import Login from '../views/Login';
import Register from '../views/Register';
import SelectDispatch from '../views/SelectDispatch';
import PurchaseDetail from '../views/PurchaseDetail';
import ConfirmShop from '../views/ConfirmShop';


const SwitchRoute = () => {
    return (
        <SwitchRouter>
            <Route path='/confirm_shop' exact>
                <ConfirmShop />
            </Route>
            <Route path='/purchase_detail' exact>
                <PurchaseDetail />
            </Route>
            <Route path='/select_dispatch' exact>
                <SelectDispatch />
            </Route>
            <Route path='/register' exact>
                <Register />
            </Route>
            <Route path='/login' exact>
                <Login />
            </Route>
            <Route path='/cart' exact>
                <Cart />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
        </SwitchRouter>
    )
}

export default SwitchRoute
