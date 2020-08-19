import React from 'react'
import img1 from '../../assets/img/promotion1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemCart, addQuantity, subtractQuantity } from '../../redux/cartDucks';

const ItemProductHorizontal = (props) => {
    const dispatch = useDispatch()
    const product = props.productCart
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.product_image} className="img-fluid h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body p-1">
                        <button type="button" className="close float-right mr-2" aria-label="Close"
                            onClick={() => dispatch(removeItemCart(product))}>
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <h5 className="card-title">{product.product_title}</h5>
                        <h6>
                            <small className="text-muted">Cantidad:
                                <button className="btn material-icons-12 align-middle mx-1"
                                onClick={() => dispatch(subtractQuantity(product))}>remove_circle</button>
                                {product.product_quantity}
                                <button className="btn material-icons-12 align-middle mx-1"
                                onClick={() => dispatch(addQuantity(product))}>add_circle</button>
                            </small>
                        </h6>
                        <h6 className="">Precio: ${product.product_price.toFixed(3)}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProductHorizontal
