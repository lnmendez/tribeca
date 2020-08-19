import axios from 'axios';
const qs = require('qs');

const initialUserLogin = {
        userAccount: [],
        isActive: false,
        userGuest: {}
    }
    //Types
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const SET_USER_GUEST = 'SET_USER_GUEST'
const SET_USER_EMAIL = 'SET_USER_EMAIL'

//Reducer
export default function userLoginReducer(state = initialUserLogin, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {...state, isActive: true }
        case SET_USER_GUEST:
            return {...state, userGuest: action.user }
        case SET_USER_EMAIL:
            return {...state, }
        default:
            return state
    }
}

// action
export const userLogin = (dataForm) => async(dispatch) => {
    var data = qs.stringify({
        'grant_type': 'password',
        'username': dataForm.user_name, //'lnmendez94@gmail.com',
        'password': dataForm.user_password //'852612868'
    });
    var config = {
        method: 'post',
        url: 'https://resourse.tribca.cl/user/login',
        headers: {
            'Authorization': 'Basic dGVzdGNsaWVudDp0ZXN0c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };
    axios(config)
        .then(function(response) {
            console.log(response.data)
            if (response.request.status === 200) {
                const token = response.data.access_token
                dispatch({
                    type: USER_LOGIN_SUCCESS
                })
                localStorage.setItem('localToken', token)
                localStorage.setItem('localEmailLogin', dataForm.user_name)
            }
        })
        .catch(function(error) {
            console.log(error);
        });

}

export const getUserLogin = () => async() => {
    console.log(localStorage.getItem('localEmailLogin'))
    console.log(localStorage.getItem('localToken'))
    if (localStorage.getItem('localEmailLogin') && localStorage.getItem('localToken')) {
        const email = localStorage.getItem('localEmailLogin')
        const token = localStorage.getItem('localToken')
        var config = {
            method: 'get',
            url: `https://resourse.tribca.cl/profile/${email}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config)
            .then(function(response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

export const userGuestValidation = (user) => (dispatch) => {
    dispatch({
        type: SET_USER_GUEST,
        user
    })
}