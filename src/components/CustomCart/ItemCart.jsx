import React from 'react'
import { addQuantity,subtractQuantity,removeItemCart } from '../../redux/cartDucks';
import { useDispatch } from 'react-redux';
const ItemCart = (props) => {
    const dispatch = useDispatch()
    const product = props.productCart
    return (
        <div className="container py-4 border-bottom">
            <div className="row">
                <div className="col-4 col-lg-2">
                    <img src={product.product_image} className="rounded mr-2" height="90" width="100" alt="item product" />
                </div>
                <div className="col-8 col-lg-4 mt-md-0">
                    <h5>{product.product_title}</h5>
                    <h6>{product.product_description}</h6>
                    <h6>Precio: $ {product.product_price}</h6>
                </div>
                <div className="col-5 col-lg-4 mb-2 mt-2 mt-md-0 mb-md-0">
                    <h5 className="mb-2 mb-md-3">Cantidad</h5>
                    <div className="d-flex justify-content-start ">
                        <div className="col-md-1">
                            <span className="material-icons" onClick={()=> dispatch(subtractQuantity(product))}>
                                remove_circle
                            </span>
                        </div>
                        <div className="col-lg-2 text-center ">
                            <span className="align-bottom mx-3">
                                {product.product_quantity}</span>
                        </div>
                        <div className="col-lg-1">
                            <span className="material-icons" onClick={()=> dispatch(addQuantity(product))}>
                                add_circle
                            </span>
                        </div>
                    </div>

                </div>
                <div className="col-5 mt-2 mt-md-0 col-md-2 text-md-center mb-2 mb-md-0">
                    <h5 className="mb-2 mb-md-3">Eliminar</h5>
                    <a className="material-icons text-decoration-none text-dark" href="#" onClick={()=> dispatch(removeItemCart(product))}>
                        delete_forever
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ItemCart
