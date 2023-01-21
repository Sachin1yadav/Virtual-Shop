import axios from "axios"

export const addNewUserApi  = async(userData)=>{
    try{
        let res = await axios.post(`https://lackadaisical-volcano-larch.glitch.me/user`,userData)
        return res
        }catch(err){
          return err
    }
}