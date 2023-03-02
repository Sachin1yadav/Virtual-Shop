import axios from 'axios'


export const getAdmin = async (data)=>{
    try{
        let res = await axios.post(`${process.env.REACT_APP_AUTH_URL}/login`,data)
        return  res.data.access_token
    }catch(err){
        return err
    }
}