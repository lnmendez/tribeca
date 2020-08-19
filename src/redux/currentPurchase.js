import axios from 'axios';
var qs = require('qs');

//constants
const initialPurchase = {
    userOrderId: 0,
    userCart: [],
    userAccount: [],
    userStore: [],
    purchaseCompleted: false
}

const SET_CART = 'SET_CART'
const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT'
const SET_STORE = 'SET_STORE'
const POST_PURCHASE = 'POST_PURCHASE'
const SET_ORDER_ID = 'SET_ORDER_ID'

export default function currentPurchase(state = initialPurchase, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                userCart: action.payload
            }
        case SET_USER_ACCOUNT:
            return {
                ...state,
                userAccount: action.payload
            }
        case SET_STORE:
            return {
                ...state,
                userStore: action.payload
            }
        case SET_ORDER_ID:
            return {
                ...state,
                userOrderId: action.order_id,
                purchaseCompleted: true
            }    
        default:
            return state
    }
}

//Action
export const setUser = (userAccount) => (dispatch) => {
    dispatch({
        type: SET_USER_ACCOUNT,
        payload: userAccount
    })
}

export const setCart = (userCart) => (dispatch) => {
    dispatch({
        type: SET_CART,
        payload: userCart
    })
}

export const setStore = (userStore) => (dispatch) => {
    dispatch({
        type: SET_STORE,
        payload: userStore
    })
}

export const setPurchase = (userAccount, userCart, userStore, userTotalPrice, payment) => (dispatch) => {
    dispatch({
        type: POST_PURCHASE
    })
    var config = {
        method: 'post',
        url: 'https://resourse.tribca.cl/order',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
            'order_amount': userTotalPrice,
            'order_payment': payment,
            'order_client_fullname': userAccount.guest_name,
            'order_client_email': userAccount.guest_email,
            'order_client_phone': userAccount.guest_phone,
            'order_client_address': userStore.store_address,
            'order_client_commune': userStore.store_commune,
            'order_user': 1,
            'order_store': userStore.store_delivery?userStore.store_commune:userStore.store_id,
            'order_delivery': userStore.store_delivery?1:0,
            'order_address_obs': userStore.store_address_obs
        })
    }
    axios(config)
        .then(function (response) {
            const order_id = response.data.order_id
            localStorage.setItem('localOrderId',order_id)
            dispatch({
                type: SET_ORDER_ID,
                order_id
            })
            userCart.map(item =>
                axios({
                    method: 'post',
                    url: 'https://resourse.tribca.cl/orderdetails',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: qs.stringify({
                        'detail_order': response.data.order_id,
                        'detail_product': item.product_id,
                        'detail_product_title': item.product_title,
                        'detail_product_quantity': item.product_quantity,
                        'detail_product_amount': parseInt(item.product_price) * parseInt(item.product_quantity)
                    })
                }).then(function (response) {
                    console.log(response)
                }).catch(function (error) {
                    console.log(error.response.data);
                }))
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
}