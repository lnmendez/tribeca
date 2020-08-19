import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setPurchase } from '../redux/currentPurchase';
import ItemCart from '../components/CustomCart/ItemCart';
import { Redirect } from 'react-router-dom';
const ConfirmShop = () => {
    const userAccount = useSelector(store => store.purchaseReducer.userAccount)
    const userCart = useSelector(store => store.cartReducer.products.filter(item => item.product_cart === true))
    const userStore = useSelector(store => store.purchaseReducer.userStore)
    const userTotalPrice = useSelector(store => store.cartReducer.totalPrice)
    const dispatch = useDispatch()
    const [stateCheckbox, setStateCheckbox] = React.useState("3")
    return (
        <div className="container-fluid px-3 pt-5 mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h4>Detalle de los productos</h4>
                    {userCart.map(item => <ItemCart productCart={item} />)}
                </div>
                <div className="col-md-4 border-info">
                    <h4 className="mb-4">Detalle de la compra</h4>
                    <h6>Nombre: {userAccount.guest_name}</h6>
                    <h6>Correo: {userAccount.guest_email}</h6>
                    <h6>Telefono: {userAccount.guest_phone}</h6>
                    <h6>Tienda: {userStore.store_name}</h6>
                    <h6>Dirección: {userStore.store_address}</h6>
                    <h6>Total a pagar: {userTotalPrice}</h6>
                    <div>
                        <h6>Modalidad de pago:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioPayment" 
                            id="1" defaultChecked value="3" onClick={()=>setStateCheckbox("3")}/>
                            <label className="form-check-label" htmlFor="1">
                                Efectivo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioPayment" 
                            id="2" value="2" onClick={()=>setStateCheckbox("2")}/>
                            <label className="form-check-label" htmlFor="2">
                                RedCompra
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioPayment" 
                            id="3" value="1" onClick={()=>setStateCheckbox("1")}/>
                            <label className="form-check-label" htmlFor="3">
                                Webpay
                            </label>
                        </div>
                        {stateCheckbox==="1"?
                        <div>
                        <button type="submit" className="btn btn-warning btn-block mt-3" 
                        onClick={()=> dispatch(setPurchase(userAccount,userCart,userStore,userTotalPrice,stateCheckbox))}>Realizar pago</button>
                        <button type="submit" className="btn btn-white border-warning btn-block">Cancelar</button>
                        </div>
                        :
                        <div>
                        <button type="submit" className="btn btn-warning btn-block mt-3" 
                        onClick={()=> dispatch(setPurchase(userAccount,userCart,userStore,userTotalPrice,stateCheckbox))}>Confirmar compra</button>
                        <button type="submit" className="btn btn-outline-warning text-dark btn-block">Cancelar</button>
                        </div>
                        }
                       
                        {useSelector(store => store.purchaseReducer.purchaseCompleted)?<Redirect to="/purchase_detail"/>:null}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConfirmShop
