import {
    WISHLIST_GET_ERROR,
    WISHLIST_GET_LOADING,
    WISHLIST_GET_SUCCESS,
    WISHLIST_REMOVE
} from "./Wishlist.actionTypes"

let initialState = {
    loading:false,
    error:false,
    wishData:[],
}

export const wishReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  WISHLIST_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  WISHLIST_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  WISHLIST_GET_SUCCESS:{
            return {
                ...state,
                loading:false,
                wishData:payload,
            }
        }

        case WISHLIST_REMOVE:{
            return {
                ...state,
                wishData:state.wishData.filter((wish)=> wish.id !== payload.id)
            }
        }

        default : {
            return state;
        }
    }
}