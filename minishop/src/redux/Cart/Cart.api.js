import axios from "axios";

export const getCartAPI = async(userName) => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/user?name=${userName}`);
    return res.data;
}


export const updateCartApi =  async(newData) => {
    try{
        let res = await axios.post(`https://lackadaisical-volcano-larch.glitch.me/user?name=${newData.name}`,newData.cart);
        console.log(res)
    }catch(err){
        console.log("errrroroeroer is",err)
    }
}
export const deleteCart = async(id) => {
    try{
        let res =  await axios.delete(`https://lackadaisical-volcano-larch.glitch.me/cart/${id}`);
        return res;
    }catch(err){
        return err;
    }
}
   