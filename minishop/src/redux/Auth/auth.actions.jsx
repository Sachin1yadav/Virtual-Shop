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
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config";

// user Login using email and password

export const userLogin  = async(user)=> (dispatch)=>{
  try{    
    let res =  signInWithEmailAndPassword(auth, user.email, user.password);
    dispatch({type:LOGIN_SUCCESS,payload:res})
  }catch(err){
    dispatch({type:LOGIN_FAIL,})
  }
}

// user signup using data 

export const  userSignup = async(email,password)=>(dispatch)=>{
  try{
    let res = createUserWithEmailAndPassword(auth, email, password);
    dispatch({type:SIGNUP_SUCCESS,payload:res})
  }catch(err){
    dispatch({type:SIGNUP_FAIL})
  }
}
// user signout 

// const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//   //   console.log(currentUser);
//     setUser(currentUser);
//   });
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
    console.log('google failed',error)
    dispatch({type:LOGIN_FAIL,payload:error})
  }
};




// forgot password  functionality
export const forgotPassword = (email) =>async(dispatch)=> {
  try{
    sendPasswordResetEmail(auth, email);
  }
  catch(er){
    console.log(er)
  }
};