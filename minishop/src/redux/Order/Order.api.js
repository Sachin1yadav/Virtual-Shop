import axios from "axios";

export const getOrderAPI = async() => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/cart`);
    return res.data;
}


export const deleteOrder = async(id) => {
    try{
        let res =  await axios.delete(`https://lackadaisical-volcano-larch.glitch.me/cart/${id}`);
        return res;
    }catch(err){
        return err;
    }
}