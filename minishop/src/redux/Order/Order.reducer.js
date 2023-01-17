import {
    ORDER_GET_LOADING,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR
} from "./Order.actionTypes"

let initialState = {
    loading:false,
    error:false,
    orderdata:[]
}

export const OrderReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  ORDER_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  ORDER_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  ORDER_GET_SUCCESS:{
            return {
                ...state,
                loading:false,
                orderdata:payload,
            }
        }

        default : {
            return state;
        }
    }
}