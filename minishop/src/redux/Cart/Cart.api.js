import axios from "axios";

export const getCartAPI = async(userName) => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/user?name=${userName}`);
    return res.data;
}


export const updateCartApi =  (user,newData) => {
    // return axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user?name=${user.name}`,newData);
}


export const deleteCart = async(id) => {
    try{
        let res =  await axios.delete(`https://lackadaisical-volcano-larch.glitch.me/cart/${id}`);
        return res;
    }catch(err){
        return err;
    }
}
   