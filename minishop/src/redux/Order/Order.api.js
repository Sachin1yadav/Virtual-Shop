import axios from "axios";

export const getOrderAPI = async() => {
    let res =  await axios.get(`${process.env.REACT_APP_BASE_URL}/cart`);
    return res.data;
}
export const deleteOrder = async(id) => {
    try{
        let res =  await axios.delete(`${process.env.REACT_APP_BASE_URL}/cart/${id}`);
        return res;
    }catch(err){
        return err;
    }
}