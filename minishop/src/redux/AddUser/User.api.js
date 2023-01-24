import axios from "axios"
export const getUserApi = async (id) => {
    return await axios.get(`https://lackadaisical-volcano-larch.glitch.me/user/${id}`)
}

export const addNewUserApi  = async(userData)=>{
    try{
        let res = await axios.post(`https://lackadaisical-volcano-larch.glitch.me/user`,userData)
        return res
        }catch(err){
         console.log(err)
    }
}
export const updateUserApi = async(userData)=>{
    try{
        let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/user/${userData.id}`,userData)
        return res
        }catch(err){
        //   return err
    }
}