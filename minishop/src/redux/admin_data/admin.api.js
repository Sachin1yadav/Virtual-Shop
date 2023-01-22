import axios from "axios"

export const getProductsApi = async(page)=>{
    try{
        const res = await axios.get(`https://lackadaisical-volcano-larch.glitch.me/data?_page=${page}&_limit=10`)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}
export const getAllProductsApi = async()=>{
    try{
        const res = await axios.get(`https://lackadaisical-volcano-larch.glitch.me/data`)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}

export const getAllUsersApi = async()=>{
    try{
        let res = await axios.get('https://lackadaisical-volcano-larch.glitch.me/user')
        return res.data
    }catch(err){
        console.log(err)
    }
}