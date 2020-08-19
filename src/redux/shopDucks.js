import axios from "axios";
//constants
const initialShop = {
    shops: [],
    selectShop: []
}

const GET_SHOP_SUCCESS = 'GET_SHOP_SUCCESS'
const SET_SELECT_SHOP = 'SET_SELECT_SHOP'

export default function shopReducer(state = initialShop, action) {
    switch (action.type) {
        case GET_SHOP_SUCCESS:
            return {
                ...state,
                shops: action.payload
            }
        case SET_SELECT_SHOP:
            return {
                ...state,
                selectShop: action.shop
            }
        default:
            return state
    }
}

//Action
export const getShopSuccess = () => async(dispatch) => {
    if (localStorage.getItem('localShop')) {
        dispatch({
            type: GET_SHOP_SUCCESS,
            payload: JSON.parse(localStorage.getItem('localShop'))
        })
        return
    }
    try {
        const res = await axios.get('https://resourse.tribca.cl/store')
        dispatch({
            type: GET_SHOP_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('localShop', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const setSelectShop = (shop) => (dispatch) => {
    console.log(shop)
    dispatch({
        type: SET_SELECT_SHOP,
        shop
    })
}