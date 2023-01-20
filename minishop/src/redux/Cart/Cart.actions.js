import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR,
    CART_UPDATE_DATA
} from "./Cart.actionTypes"

import { getCartAPI, updateCart } from "./Cart.api"

export const cartActions = () => async(dispatch) => {
    dispatch({type: CART_GET_LOADING});
    try{
        let data = await getCartAPI();
        dispatch({type:CART_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: CART_GET_ERROR})
    }
}

export const updateCarts = (id,newChanges) => async(dispatch) => {  
   
    try{

        let data = await updateCart(id,newChanges);
        dispatch({type:CART_UPDATE_DATA,payload:data})
    }catch(e){
        dispatch({type:CART_GET_ERROR})
    }
}


