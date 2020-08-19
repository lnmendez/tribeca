import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartDucks';
import { toast } from 'react-toastify';

const ItemProduct = (props) => {
    const toastId = React.useRef(null);
        function notify () {
        if(! toast.isActive(toastId.current)) {
            toastId.current = toast.success("Producto agregado!");
          }
    }
    const dispatch = useDispatch()
    return (
        <div className="col-md-3 mt-3 mb-3">
            
            <div className={`card h-100 ${props.products.product_type==="1"?"border-warning":"border-info"}`}>
                <img src={props.products.product_image} className="card-img-top" height="180" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.products.product_title}</h5>
                    <p className="card-text">{props.products.product_description}</p>
                    <p className="card-text ">Precio: ${props.products.product_price}</p>
                    <button className={`btn mt-auto ${props.products.product_type==="1"?
                    "btn-outline-warning text-dark":"btn-outline-info"}`}
                    onClick={()=>{dispatch(addToCart(props.products));notify()}}>
                        Agregar a la bolsa
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct
