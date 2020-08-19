import axios from 'axios';
//constants
const initialCart = {
        products: [],
        countCart: 0,
        totalPrice: 0,
    }
    //types
const ADD_TO_CART = 'ADD_TO_CART'
const SET_INITIAL_CART = 'SET_INITIAL_CART'
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART'
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUB_QUANTITY = 'SUB_QUANTITY';
const REMOVE_CART = 'REMOVE_CART'
    //reducers
export default function cartReducer(state = initialCart, action) {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:
            console.log(action.product.product_quantity)
            return {
                ...state,
                products: state.products.map(item => item.product_id === action.product_id ? 
                    {...item, product_cart: true } : item),
                    /* products: state.products.map(item =>
                         item.product_id === action.product.product_id ? {
                             ...item,
                             product_cart: true,
                             product_quantity: item.product_quantity + 1
                         } : item,
                     ),*/
                totalPrice: state.totalPrice + action.product.product_price,
                countCart: state.products.filter(item => item.product_cart === true)
                    .map(item => item.product_quantity).reduce((prev, next) =>
                        prev + next, 0)
            }
        case ADD_QUANTITY:
            return {
                ...state,
                products: state.products.map(item =>
                    item.product_id === action.product.product_id ? {
                        ...item,
                        product_quantity: item.product_quantity + 1
                    } : item
                ),
                totalPrice: state.totalPrice + action.product.product_price,
                countCart: state.products.filter(item => item.product_cart === true)
                    .map(item => item.product_quantity).reduce((prev, next) =>
                        prev + 1, 0)
            }
        case SUB_QUANTITY:
            return {
                ...state,
                products: state.products.map(item =>
                    item.product_id === action.product.product_id ? {
                        ...item,
                        product_quantity: item.product_quantity !== 1 ? item.product_quantity - 1 : 1,
                    } :
                    item,
                ),
                totalPrice: action.product.product_quantity === 1 ?
                    state.totalPrice + 0 : state.totalPrice - action.product.product_price,
                countCart: action.product.product_quantity === 1 ? state.countCart : state.products.filter(item => item.product_cart === true).map(item => item.product_quantity).reduce((prev, next) => prev + next, -1)
            }
        case REMOVE_ITEM_CART:
            return {
                ...state,
                totalPrice: parseInt(state.totalPrice) - (parseInt(action.product.product_price) * parseInt(action.product.product_quantity)),
                products: state.products.map(product =>
                    product.product_id === action.product.product_id ? {
                        ...product,
                        product_cart: false,
                        product_quantity: 0
                    } : product,
                ),
                countCart: state.countCart >= 1 ? state.countCart - action.product.product_quantity : state.countCart - 0

            }
        case SET_INITIAL_CART:
            return {
                ...state,
                products: action.localCart,
                totalPrice: action.localCart.filter(item => item.product_cart === true)
                    .map(item => (item.product_price * item.product_quantity)).reduce((prev, next) =>
                        prev + next, 0),
                countCart: action.localCart.filter(item => item.product_cart === true)
                    .map(item => item.product_quantity).reduce((prev, next) =>
                        prev + next, 0)

            }
        case REMOVE_CART:
            console.log('pase por aqui otra vez')

            return {
                ...state,
                products: initialCart.products,
                countCart: initialCart.countCart,
                totalPrice: initialCart.totalPrice,
            }
        default:
            return state
    }
}

export const removeCart = () => (dispatch) => {
    dispatch({
        type: REMOVE_CART
    })
}

export const getProductSuccess = () => async(dispatch) => {
    /*
    if (localStorage.getItem('localCart')) {
        const localCart = JSON.parse(localStorage.getItem('localCart'))
        dispatch({
            type: SET_INITIAL_CART,
            localCart
        })
        return
    }
    */
    try {
        const res = await axios.get('https://resourse.tribca.cl/product')
        const response = res.data.map(item => item.product_quantity != null ? {
            ...item,
            product_quantity: 1,
            product_price: parseInt(item.product_price),
            product_cart: false
        } : null)
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: response
        })
    } catch (error) {
        console.log(error)
    }
}

export const removeItemCart = (product) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_CART,
        product
    })
    localStorage.setItem('localCart', JSON.stringify(getState().cartReducer.products))
}

export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CART,
        product
    })
    localStorage.setItem('localCart', JSON.stringify(getState().cartReducer.products))
}

export const subtractQuantity = (product) => (dispatch, getState) => {
    dispatch({
        type: SUB_QUANTITY,
        product
    })
    localStorage.setItem('localCart', JSON.stringify(getState().cartReducer.products))
}

export const addQuantity = (product) => (dispatch, getState) => {
    dispatch({
        type: ADD_QUANTITY,
        product
    })
    localStorage.setItem('localCart', JSON.stringify(getState().cartReducer.products))
}