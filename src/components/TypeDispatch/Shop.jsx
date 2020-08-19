import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setStore } from '../../redux/currentPurchase';
import ItemStore from './ItemStore';
import { Link } from 'react-router-dom';
const Shop = () => {
    const dispatch = useDispatch()
    const shops = useSelector(store => store.shopReducer.shops)
    const shopSelected = useSelector(store => store.shopReducer.selectShop)
    const filterShop = shops.filter(item => item.store_id !== "1")
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 mt-4 mb-4">
                {
                shopSelected.length===0?
                <h4 className="text-center mt-4 px-2">Elige una de nuestras tiendas</h4>
                :
                <h4 className="text-center mt-4 px-2">{`Haz seleccionado ${shopSelected.store_name}`}</h4>
                }
                {filterShop.map(item => <ItemStore shop={item} select={shopSelected.store_id}/>)}
                {
                shopSelected.length===0?
                <button className="btn btn-warning" disabled>Continuar</button>
                :
                <Link to="/confirm_shop">    
                <button className="btn btn-warning" onClick={dispatch(setStore(shopSelected))}>Continuar</button>
                </Link> 
                }
                </div>
            </div>
        </div>

    )
}

export default Shop
