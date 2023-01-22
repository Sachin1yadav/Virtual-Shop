import { async } from '@firebase/util'
import {USER_ADD_FAIL, USER_ADD_SUCCESS} from './User.actionTypes'
import { addNewUserApi, getUserApi, logoutUserApi, updateUserApi, userCartUpdateApi } from './User.api'


export const getUser = (id) => async(dispatch) =>{
    try{
      let res = await getUserApi(id)
      return res.data
    }catch(err){
      console.log(err)
    }
}


export const addNewUser  = (userData)=> async(dispatch)=>{
  let newData = {
    profile:userData.profile,
    active:true,
    name:userData.name,
    email:userData.email,
    id:userData.id,
    cart:[],
    whishList:[],
    orders:[],
  }
  console.log(userData)
    try{
      let res = await addNewUserApi(newData)
      dispatch({type:USER_ADD_SUCCESS, payload:res})
    }catch(err){
        dispatch ({type:USER_ADD_FAIL})
    }
}

export const logoutUser = (userdata)=> async(dispatch)=>{
  let userStatus = {...userdata,active:false}
  try{
    let res = logoutUserApi(userStatus)
  }catch(err){
    console.log(err)
  }
}


export const updateUser = (userdata) => async(dispatch)=>{
 try{
  let res = await updateUserApi({...userdata,active:true})
  // console.log('resupdate:', res)
 } catch(er){
  console.log(er)
 }
}


export const userCartUpdate = (userData) => async(dispatch) => {
  try{
    let res = await userCartUpdateApi(userData)
    console.log('userCartUpdate:', res)
  }catch(err){

  }
}