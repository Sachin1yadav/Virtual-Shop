import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR
} from "./Cart.actionTypes"

import { getCartAPI } from "./Cart.api"

export const CartActions = () => async(dispatch) => {
    dispatch({type: CART_GET_LOADING});
    try{
        let data = await getCartAPI();
        dispatch({type:CART_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: CART_GET_ERROR})
    }
}