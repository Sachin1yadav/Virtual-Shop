import {
    SINGLE_GET_LOADING,
    SINGLE_GET_SUCCESS,
    SINGLE_GET_ERROR
} from "./SingleProduct.actionTypes"

let initialState = {
    loading:false,
    error:false,
    singleProductData:{}
}

export const singleReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  SINGLE_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  SINGLE_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  SINGLE_GET_SUCCESS:{
            return {
                ...state,
                loading:false,
                singleProductData:payload,
            }
        }

        default : {
            return state;
        }
    }
}