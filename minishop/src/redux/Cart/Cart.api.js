import axios from "axios";

export const getCartAPI = async() => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/cart`);
    // console.log('res:', res.data)
    return res.data;
}


export const updateCart =  (id,newValue) => {
    return axios.patch(`https://lackadaisical-volcano-larch.glitch.me/cart/${id}`,newValue);
}


export const deleteCart = async(id) => {
    try{

        let res =  await axios.delete(`https://lackadaisical-volcano-larch.glitch.me/cart/${id}`);
        return res;
    }catch(err){
        console.log(err);
    }
}
   