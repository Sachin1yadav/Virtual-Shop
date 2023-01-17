import {
    SINGLEPAGE_GET_LOADING,
    SINGLEPAGE_GET_SUCCESS,
    SINGLEPAGE_GET_ERROR
} from "./SingleProduct.actionTypes"

import { getSingleProductAPI } from "./SingleProduct.api"

export const getSingleProduct = () => async(dispatch) => {
    dispatch({type: SINGLEPAGE_GET_LOADING});
    try{
        let data = await getSingleProductAPI();
        dispatch({type:SINGLEPAGE_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: SINGLEPAGE_GET_ERROR})
    }
}