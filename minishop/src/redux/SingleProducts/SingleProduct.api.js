import axios from "axios";

export const getSingleProductAPI = async(id) => {
    let res =  await axios.get(`${process.env.REACT_APP_BASE_URL}/data/${id}`);
    return res.data;
}