import {
  LOGIN_SUCCESS,
LOGIN_FAIL,
SIGNUP_SUCCESS,
SIGNUP_FAIL,
RESET_USER_DATA,
LOGOUT_FAIL,
} from './auth.action.types'
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config";
import {addNewUserApi} from "../AddUser/User.api";
import {getUserApi} from "../AddUser/User.api";
// user Login using email and password

export const userLogin  = (user,toast)=> async(dispatch)=>{
  try{    
    let res =  await signInWithEmailAndPassword(auth, user.email, user.password);
    //console.log("res",res.user.uid)
    let response = await getUserApi(res.user.uid)
     dispatch({type:LOGIN_SUCCESS,payload:response.data})
     toast({
      title: 'Login Success',
      description: "Success",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }catch(err){
    toast({
      title: 'Invalid credentials.',
      description: "Please try again",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
    dispatch({type:LOGIN_FAIL,})
  }
}
// user signup using data 
export const  userSignup = (email,password,name,toast)=> async(dispatch)=>{
  try{
    let res = await createUserWithEmailAndPassword(auth, email, password);
    let obj={
      profile:"",
      active:true,
      name:name,
      email:email,
      id:res.user.uid,
      cart:[],
      wishlist:[],
      orders:[],
    }
    let response = await addNewUserApi(obj);
      dispatch({type:LOGIN_SUCCESS,payload:response.data})
    
  }catch(err){
    toast({
      title: 'User Already exists',
      description: "Please login now",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
    dispatch({type:SIGNUP_FAIL})
  }
}
// user signout 
export const userLogout = () => async(dispatch)=> {
  try{
    await signOut(auth);
    dispatch({type:RESET_USER_DATA})
  }catch(err){
    dispatch({type:LOGOUT_FAIL})
  }
};
// user login using google auth
export const loginWithGoogle = () => async(dispatch)=>{
  try {
   let res =  await signInWithPopup(auth, provider);
  const userData = {
    active:true,
    name:res.user.displayName,
    email:res.user.email,
    profile:res.user.photoURL,
    id:res.user.uid,
    super:false
   }
   dispatch({type:LOGIN_SUCCESS,payload:userData})
  } catch (error) {
    dispatch({type:LOGIN_FAIL})
  }
};