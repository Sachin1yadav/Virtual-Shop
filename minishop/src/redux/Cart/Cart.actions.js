import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR,
    CART_UPDATE_DATA,
    TOTAL_PRICE
} from "./Cart.actionTypes"

import { getCartAPI, updateCartApi } from "./Cart.api"

export const cartActions = (userName) => async(dispatch) => {
    dispatch({type: CART_GET_LOADING});
    try{
        let data = await getCartAPI(userName);
        dispatch({type:CART_GET_SUCCESS,payload:data[0].cart})
    }catch(e){
        dispatch({type: CART_GET_ERROR})
    }
}
export const updateCarts = (newData) => async(dispatch) => {  
    try{

        let data = await updateCartApi(newData);
        dispatch({type:CART_UPDATE_DATA,payload:data})
    }catch(e){
        dispatch({type:CART_GET_ERROR})
    }
}

export const cartValue = (total) => (dispatch) => {
    dispatch({type:TOTAL_PRICE,payload:total})
}

