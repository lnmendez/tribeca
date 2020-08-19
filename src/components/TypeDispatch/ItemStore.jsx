import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectShop } from '../../redux/shopDucks';
const ItemStore = (props) => {
    const dispatch = useDispatch()
    return (
        <div id={props.shop.store_id} className={`btn card  mb-3 p-0 mx-0 
        ${props.select === props.shop.store_id?"border-dark":""}`} onClick={()=>dispatch(setSelectShop(props.shop))}>
            <div className="row g-0">
                <div className="col-12 col-md-4">
                    <img src={props.shop.store_image} height="150" width="240" alt="foto-local"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.shop.store_name}</h5>
                        <p className="card-text">Dirección: {props.shop.store_address}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Teléfono: {props.shop.store_phone}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemStore
