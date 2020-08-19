import React from 'react'
import ItemProduct from './ItemProduct'
import CustomTitle from '../utilities/CustomTitle';

const PromotionProducts = (props) => {
    const promotionProduct = props.promotionProducts
    return (
        <div className="row">       
            <CustomTitle title="Promociones" />
            {promotionProduct.map(item => {
                return <ItemProduct key={item.product_id} products={item} />
            })}
        </div>
    )
}

export default PromotionProducts
