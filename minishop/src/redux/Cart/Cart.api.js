import axios from "axios";

export const getCartAPI = async() => {
    let res =  await axios.get(`https://b-tmart-api-5tjm.vercel.app/data/1`);
    // console.log('res:', res.data)
    return res.data;
}