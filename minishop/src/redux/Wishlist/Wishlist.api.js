import axios from "axios";

export const getWishlistAPI = async(user) => {
    let res =  await axios.get(`https://busy-peplum-fawn.cyclic.app/${user.id}`);
    // console.log('res:', res.data)
    return res.data;
}

export const removeWishlist = async(id) => {
    try{
        let res =  await axios.delete(`https://busy-peplum-fawn.cyclic.app/wishList/${id}`);
        return res;
    }catch(err){
        return err;
    }
}
   