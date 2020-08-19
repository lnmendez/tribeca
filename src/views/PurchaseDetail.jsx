import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { removeCart,getProductSuccess } from '../redux/cartDucks';
const PurchaseDetail = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.removeItem('localCart')
        dispatch(removeCart())
        dispatch(getProductSuccess())
    }, [dispatch])

    return (
        <div className="container mt-5 pt-5">
            <h1>Detalle de compra</h1>
            <div class="alert alert-success" role="alert">
                Tu orden n° {localStorage.getItem('localOrderId')} Estamos trabajando en tu pedido, Pronto nos comunicaremos contigo
            </div>
            {/* <h4>Detalle de la compra</h4>
            <h6>Nombre: {userAccount.guest_name}</h6>
            <h6>Correo: {userAccount.guest_email}</h6>
            <h6>Telefono: {userAccount.guest_phone}</h6>
            <h6>Tienda: {userStore.store_name}</h6>
            <h6>Dirección: {userStore.store_address}</h6>
           <h6>Total a pagar: {userTotalPrice}</h6>**/}
        </div>
    )
}

export default PurchaseDetail
