import React from 'react'
import img1 from '../../assets/img/ingredients.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCart } from '../../redux/currentPurchase';
import { useDispatch } from 'react-redux';

const DetailsOrder = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.cartReducer.products)
    const totalPrice = useSelector(store => store.cartReducer.totalPrice)
    const productsCart = products.filter(item => item.product_cart === true)
    const val = productsCart.length ? false : true
    if (val === true) {
        return (
            <div className="card mt-4 border-dark">
                <div className="card-body border-light ">
                    <h5 className="card-title text-center">No hay productos seleccionados</h5>
                    <img src={img1} className="w-100" height="320" alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-4">
            <div className="card-body border-light ">
                <h5 className="card-title mb-3">Productos seleccionados</h5>

                <h5 className="mb-3">SubTotal: ${totalPrice}</h5>

                <Link to='/login' className="text-decoration-none">
                    <button className="btn btn-outline-dark btn-block" 
                    onClick={()=> dispatch(setCart(productsCart))}>
                        Continuar con la compra
                        <span className="material-icons align-middle">
                            arrow_right_alt
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DetailsOrder
