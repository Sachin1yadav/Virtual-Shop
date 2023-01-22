import {
    legacy_createStore,
    compose,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from "redux-thunk"

import { cartReducer } from './Cart/Cart.reducer'

import { orderReducer } from './Order/Order.reducer'

import { singleReducer } from './SingleProducts/SingleProduct.reducer'

import {authReducerfunc} from './Auth/auth.reducer';
 import {adminAllData} from './admin_data/admin.reducer'
import { adminAuthReducer } from './admin_auth/admin.reducer'
import { wishReducer } from './Wishlist/Wishlist.reducer'

const rootReducer = combineReducers({
    cart:cartReducer,
    order:orderReducer,
    wishlist:wishReducer,
    singleProduct: singleReducer,
    adminAuth:adminAuthReducer,
    authUser:authReducerfunc,
    adminAll:adminAllData
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))