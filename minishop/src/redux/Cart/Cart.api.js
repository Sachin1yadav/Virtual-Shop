import axios from "axios";

export const getCartAPI = async() => {
    let res =  await axios.get(`https://busy-peplum-fawn.cyclic.app/products`);
    return res.data;
}