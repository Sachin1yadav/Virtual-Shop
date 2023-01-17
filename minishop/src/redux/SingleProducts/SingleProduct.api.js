import axios from "axios";

export const getSingleProductAPI = async() => {
    let res =  await axios.get(`https://busy-peplum-fawn.cyclic.app/products/1`);
    return res.data;
}