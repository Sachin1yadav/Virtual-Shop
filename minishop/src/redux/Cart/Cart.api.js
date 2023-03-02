import axios from "axios";

export const getCartAPI = async(userName) => {
    let res =  await axios.get(`${process.env.REACT_APP_BASE_URL}/user?name=${userName}`);
    return res.data;
}


export const updateCartApi =  async(newData) => {
    try{
         await axios.post(`${process.env.REACT_APP_BASE_URL}/user?name=${newData.name}`,newData.cart);
    }catch(err){
        console.log(err)
    }
}
   