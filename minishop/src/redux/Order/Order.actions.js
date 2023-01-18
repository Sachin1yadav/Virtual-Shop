import {
    ORDER_GET_LOADING,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR
} from "./Order.actionTypes"

import { getOrderAPI } from "./order.api"

export const orderActions = () => async(dispatch) => {
    dispatch({type: ORDER_GET_LOADING});
    try{
        let data = await getOrderAPI();
        dispatch({type:ORDER_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: ORDER_GET_ERROR})
    }
}