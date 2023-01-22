import axios from "axios";

export const getWishlistAPI = async() => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/wishlist`);
    // console.log('res:', res.data)
    return res.data;
}

export const removeWishlist = async(id) => {
    try{
        let res =  await axios.delete(`https://lackadaisical-volcano-larch.glitch.me/wishlist/${id}`);
        return res;
    }catch(err){
        return err;
    }
}
   