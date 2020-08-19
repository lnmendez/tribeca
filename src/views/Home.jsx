import React, { useEffect } from 'react'
import MenuProducts from '../components/MenuProducts/MenuProducts'
import { getProductSuccess } from '../redux/cartDucks';
import { useDispatch, useSelector } from 'react-redux';
import PromotionProducts from '../components/MenuProducts/PromotionProducts';
import CustomCarousel from '../components/Carousel/CustomCarousel';
import { ToastContainer } from 'react-toastify';

const Home = () => {

    const products = useSelector(store => store.cartReducer.products)
    const productMenu = products.filter(item => item.product_type === "1");
    const productPromotion = products.filter(item => item.product_type === "2")
    return (
        <div>
            <CustomCarousel />
            <ToastContainer
                position="bottom-center"
                autoClose={1500} />
            <div className="container">
                <div className="row pt-3">
                    <div className="col-12">
                        <PromotionProducts
                            promotionProducts={productPromotion}
                        />
                        <MenuProducts menuProducts={productMenu} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
