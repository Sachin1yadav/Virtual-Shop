import axios from "axios";

export const getSingleProductAPI = async(id) => {
    let res =  await axios.get(`https://b-tmart-api-5tjm.vercel.app/data/${id}`);
    // console.log('res:', res.data)
    return res.data;
}