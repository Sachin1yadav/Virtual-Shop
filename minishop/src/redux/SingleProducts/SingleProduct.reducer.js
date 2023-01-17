import {
    SINGLEPAGE_GET_LOADING,
    SINGLEPAGE_GET_SUCCESS,
    SINGLEPAGE_GET_ERROR
} from "./SignleProduct.actionTypes"

let initialState = {
    loading:false,
    error:false,
    singleProductData:[]
}

export const singleReducerReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  SINGLEPAGE_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  SINGLEPAGE_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  SINGLEPAGE_GET_SUCCESS:{
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