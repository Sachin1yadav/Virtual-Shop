import axios from "axios"
export const getUserApi = async (id) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`)
}

export const addNewUserApi  = async(userData)=>{
    try{
        let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user`,userData)
        return res
        }catch(err){
         console.log(err)
    }
}
export const updateUserApi = async(userData)=>{
    try{
        let res = await axios.patch(`${process.env.REACT_APP_BASE_URL}/user/${userData.id}`,userData)
        return res
        }catch(err){}
}