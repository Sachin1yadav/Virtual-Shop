import { async } from "@firebase/util"
import axios from "axios"

export const getUserApi = async (id) => {
    return await axios.get(`https://lackadaisical-volcano-larch.glitch.me/user/${id}`)
}

export const addNewUserApi  = async(userData)=>{
    try{
        let res = await axios.post(`https://lackadaisical-volcano-larch.glitch.me/user`,userData)
        return res
        }catch(err){
          return err
    }
}

export const logoutUserApi = async(userData)=>{
    try{
        let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user/${userData.id}`,userData)
        console.log(res)
        // return res
        }catch(err){
          return err
    }
}
export const updateUserApi = async(userData)=>{
    console.log(userData)
    try{
        let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user/${userData.id}`,userData)
        
        return res
        }catch(err){
        //   return err
    }
}


export const userCartUpdateApi = async(userData) => {
    console.log('userData:', userData)
    try{
        let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user/${userData.id}`,userData)
        return res
    }catch(er){

    }
}