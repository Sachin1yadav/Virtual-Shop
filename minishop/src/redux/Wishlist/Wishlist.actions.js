import {
    WISHLIST_GET_ERROR,
    WISHLIST_GET_LOADING,
    WISHLIST_GET_SUCCESS,
    WISHLIST_REMOVE
} from "./Wishlist.actionTypes"

import { getWishlistAPI,removeWishlist} from "./Wishlist.api"

export const wishlistGetData = (user) => async(dispatch) => {
    dispatch({type: WISHLIST_GET_LOADING});
    try{
        let data = await getWishlistAPI(user);
        dispatch({type:WISHLIST_GET_SUCCESS,payload:data})

    }catch(e){
        dispatch({type: WISHLIST_GET_ERROR})
    }
}


export const removeWishlistData = (id) => async(dispatch) => {
     await removeWishlist(id);
    dispatch({type:WISHLIST_REMOVE,payload:id})
}


