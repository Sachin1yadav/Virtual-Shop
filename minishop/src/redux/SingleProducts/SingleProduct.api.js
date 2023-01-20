import axios from "axios";

export const getSingleProductAPI = async(id) => {
    let res =  await axios.get(`https://lackadaisical-volcano-larch.glitch.me/data/${id}`);
    // console.log('res:', res.data)
    return res.data;
}