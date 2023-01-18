import {
    SINGLE_GET_LOADING,
    SINGLE_GET_SUCCESS,
    SINGLE_GET_ERROR
} from "./SingleProduct.actionTypes"

import { getSingleProductAPI } from "./SingleProduct.api"

export const getSingleProduct = (id) => async(dispatch) => {
    dispatch({type: SINGLE_GET_LOADING});
    try{
        let data = await getSingleProductAPI(id);
        dispatch({type:SINGLE_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: SINGLE_GET_ERROR})
    }
}