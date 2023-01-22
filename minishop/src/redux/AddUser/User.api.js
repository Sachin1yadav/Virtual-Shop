import axios from "axios"

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
    try{
        let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user/${userData.id}`,userData)
        console.log(res)
        // return res
        }catch(err){
          return err
    }
}