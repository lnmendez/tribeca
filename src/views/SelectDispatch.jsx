import React from 'react'
import Delivery from '../components/TypeDispatch/Delivery';
import Shop from '../components/TypeDispatch/Shop';
import { getShopSuccess } from '../redux/shopDucks';
import { useDispatch } from 'react-redux';

const SelectDispatch = () => {

    const [active, setActive] = React.useState("")
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getShopSuccess())
    }, [dispatch])
    return (
        <div className="container px-4 mt-5 pt-5">
            <div className="row ">
                <h1 className="text-center">Seleccione un tipo de despacho</h1>
                <div className="col-md-12">
                    <div className="btn-group d-flex mt-4">
                        <button type="button" className={`btn btn-outline-warning text-dark
                        ${active === 'delivery' ? 'active' : ''}`}
                            onClick={() => setActive('delivery')}>
                            <h5>Delivery
                            <span className="material-icons align-top ml-2">
                                    moped
                            </span>
                            </h5>
                        </button>
                        <button type="button" className={`btn btn-outline-warning text-dark
                        ${active === 'store' ? 'active' : ''}`}
                            onClick={() => setActive('store')}>
                            <h5>
                                Retiro en tienda
                            <span className="material-icons align-top ml-2">
                                    store
                            </span>
                            </h5>
                        </button>
                    </div>
                    {active === '' ? null : active === 'delivery' ? <Delivery /> : <Shop />}
                </div>
            </div>
        </div>
    )
}

export default SelectDispatch
