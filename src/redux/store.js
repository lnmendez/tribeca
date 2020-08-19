import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserLoginReducer from './userLoginDucks';
import CartReducer from './cartDucks'
import UserRegisterReducer from './userRegisterDucks'
import ShopReducer from './shopDucks';
import CurrentPurchase from "./currentPurchase";

const rootReducer = combineReducers({
    cartReducer: CartReducer,
    userRegisterReducer: UserRegisterReducer,
    userLoginReducer: UserLoginReducer,
    shopReducer: ShopReducer,
    purchaseReducer: CurrentPurchase
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}