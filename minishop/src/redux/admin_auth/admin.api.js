import axios from 'axios'


export const getAdmin = async (data)=>{
    try{
        let res = await axios.post("https://potent-hot-uncle.glitch.me/api/auth/login",data)
        return  res.data.access_token
    }catch(err){
        return err
    }
}