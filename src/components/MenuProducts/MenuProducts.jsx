import React from 'react'
import ItemProduct from './ItemProduct'
import CustomTitle from '../utilities/CustomTitle'

const MenuProducts = (props) => {
    const menuProduct = props.menuProducts
    return (
        <div className="row">
            <CustomTitle title="Menú" />
            {menuProduct.map((item,i) => {
                return <ItemProduct key={i} products={item} />
            })}
        </div>
    )
}

export default MenuProducts
