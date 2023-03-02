import axios from "axios"

export const getProductsApi = async(page)=>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/data?_page=${page}&_limit=10`)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}
export const getAllProductsApi = async()=>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/data`)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}

export const getAllUsersApi = async()=>{
    try{
        let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
        return res.data
    }catch(err){
        console.log(err)
    }
}