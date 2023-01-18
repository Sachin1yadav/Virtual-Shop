import axios from "axios";

export const getSingleProductAPI = async(id) => {
    let res =  await axios.get(`https://busy-peplum-fawn.cyclic.app/products/${id}`);
    // console.log('res:', res.data)
    return res.data;
}