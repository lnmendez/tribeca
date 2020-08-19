import React, { useEffect } from 'react'
import DetailsOrder from '../components/DetailsOrder/DetailsOrder'
import ItemCart from '../components/CustomCart/ItemCart'
import { useSelector,useDispatch } from 'react-redux';
import { getProductSuccess } from '../redux/cartDucks';
const Cart = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductSuccess())
    }, [dispatch])
    const products = useSelector(store => store.cartReducer.products.filter(item => item.product_cart === true))

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-8 card border-warning mt-4">
                    {products.map((item,i)=> <ItemCart key={i} productCart={item}/> )}
                </div>
                <div className="col-md-4">
                    <DetailsOrder/>
                </div>
            </div>
        </div>
    )
}

export default Cart
