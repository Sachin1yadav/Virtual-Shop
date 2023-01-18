import axios from "axios";

export const getOrderAPI = async() => {
    let res =  await axios.get(`https://busy-peplum-fawn.cyclic.app/products`);
    return res.data;
}