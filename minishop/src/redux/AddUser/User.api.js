import axios from "axios"
export const getUserApi = async (id) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`)
}

export const addNewUserApi  = async(userData)=>{
    try{
        let userExist = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${userData.id}`)
        if(userExist){
            return userExist.data
        }else{
            let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user`,userData)
            return res
        }   
        }catch(err){
         console.log(err)
    }
}
export const updateUserApi = async(id,userData)=>{
    try{
        let res = await axios.patch(`${process.env.REACT_APP_BASE_URL}/user/${id}`,userData)
        return res.data
        }catch(err){}
}