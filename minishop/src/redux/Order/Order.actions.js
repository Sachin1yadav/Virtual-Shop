import {
    ORDER_GET_LOADING,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR,
    ORDER_REMOVE
} from "./Order.actionTypes"

import { deleteOrder, getOrderAPI } from "./Order.api"

export const orderActions = () => async(dispatch) => {
    dispatch({type: ORDER_GET_LOADING});
    try{
        let data = await getOrderAPI();
        dispatch({type:ORDER_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: ORDER_GET_ERROR})
    }
}

export const cancelOrder = (id) => async(dispatch) => {
    let data1 =  await deleteOrder(id);
    dispatch({type:ORDER_REMOVE,payload:id})
}