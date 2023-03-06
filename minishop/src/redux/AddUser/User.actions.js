// import {USER_ADD_SUCCESS,
//   USER_ADD_FAIL,
//   USER_GET_SUCCESS,
//   USER_GET_LOADING,
//   USER_GET_FAILED,
//   USER_UPDATE_SUCCESS,
//   USER_UPDATE_FAILED,USER_UPDATE_LOADING} from './User.actionTypes'
// import { addNewUserApi, getUserApi, updateUserApi,} from './User.api'
// export const getUser = (id) => async(dispatch) =>{
//     try{
//       dispatch({type:USER_GET_LOADING})
//       let res = await getUserApi(id)
//       dispatch({type:USER_GET_SUCCESS,payload:res.data})
//     }catch(err){
//       dispatch({type:USER_GET_FAILED})
//     }
// }
// export const addNewUser  = (userData)=> async(dispatch)=>{
//   let newData = {
//     profile:userData.profile,
//     active:true,
//     name:userData.name,
//     email:userData.email,
//     id:userData.id,
//     cart:[],
//     wishlist:[],
//     orders:[],
//   } 
//     try{
//       let res = await addNewUserApi(newData)
//       dispatch({type:USER_ADD_SUCCESS, payload:res})
//     }catch(err){
//         dispatch ({type:USER_ADD_FAIL})
//     }
// }
// export const updateUser = (userdata) => async(dispatch)=>{
//  try{
//   dispatch({type:USER_UPDATE_LOADING})
//   let res = await updateUserApi(userdata)
//   dispatch({type:USER_UPDATE_SUCCESS,payload:res.data})
//  } catch(er){
//   dispatch({type:USER_UPDATE_FAILED})
//  }
// }