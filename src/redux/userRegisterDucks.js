import axios from "axios"
var qs = require('qs');

// constants
const initialUserRegister = {
        loading: false
    }
    // types
const USER_REGISTER = 'USER_REGISTER'
const USER_REGISTER_LOADING = 'USER_REGISTER_LOADING'
    //reducers
export default function userRegisterReducer(state = initialUserRegister, action) {
    switch (action.type) {
        case USER_REGISTER_LOADING:
            return {...state, loading: state.loading === true ? false : true }
        case USER_REGISTER:
            return {}
        default:
            return state
    }
}
// action
export const userRegister = (data) => async(dispatch, getState) => {
    dispatch({
        type: USER_REGISTER_LOADING,
    })

    var config = {
        method: 'post',
        url: 'https://resourse.tribca.cl/user/registrer',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
            'user_firstname': data.user_firstname,
            'user_lastname': 'null',
            'user_email': data.user_email,
            'user_phone': data.user_phone,
            'user_address': data.user_address,
            'user_password': data.user_password,
            'user_password_confirm': data.user_password_confirm
        })
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error.response.data);
        });

}