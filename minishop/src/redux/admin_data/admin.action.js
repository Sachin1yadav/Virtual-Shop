import axios from "axios";
import { getAllProductsApi, getAllUsersApi, getProductsApi } from "./admin.api";
import {GET_PROD_LOADING,
    GET_PROD_SUCCESS,
    GET_ALL_PROD_SUCCESS,
    GET_PROD_FAIL,
    GET_USER_LOADING,
    GET_USER_ERROR,
    GET_USER_SUCCESS} from './admin.actoins.type'

//     export const uploadImg1 =async()=>{
//     let imgUrl;
//     let img_address = document.getElementById('imageUpload');
//     let filePath = img_address.files[0];
//     let form = new FormData();
//     form.append('image',filePath);
    
//     let api_key = '28637f54cd49bcfaf5a6e92f18203898'
//     try{
//         let res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`,{
//             method:'POST',
//             body:form,
//         });
//         let data = await res.json();
//         imgUrl = data.data.display_url
//     }catch(err){
//         // console.log(err)
//     }
//     let loading = document.getElementById('image_label');
//     loading.textContent = 'Select from Computer'
//     let loading_img = document.getElementById('photo_vdo');
//     loading_img.src='https://cdn.iconscout.com/icon/premium/png-128-thumb/photo-122-88145.png'
//     let preview = document.getElementById('preview');
//     preview.style.display='flex';
//     document.getElementById('post_modal_box').style.display='none'
//     let img = document.createElement('img');
//     let img_div = document.getElementById('img_preview');
//     img.setAttribute('src',imgUrl);
//     img_div.append(img)
// }

export const  getProductsAdmin = (page)=>async(dispatch)=>{
    dispatch({type:GET_PROD_LOADING})
    try{
        let res = await  getProductsApi(page)
        dispatch({type:GET_PROD_SUCCESS,payload:res})
    }catch(err){
        dispatch({type:GET_PROD_FAIL})
    }
} 
export const getProdCatagoty = (val)=>async(dispatch)=>{
try{
    let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/data?Categories=${val}`)
    dispatch({type:GET_PROD_SUCCESS,payload:res.data})
}catch(err){
    dispatch({type:GET_PROD_FAIL})
}
}
export const getAllProducts = ()=>async(dispatch)=>{
try{
    let res = await getAllProductsApi()
    dispatch({type:GET_ALL_PROD_SUCCESS,payload:res})
}catch(err){
    dispatch({type:GET_PROD_FAIL})
}
}

export const getAllUsers = ()=>async(dispatch)=>{
    try{
        dispatch({type:GET_USER_LOADING})
        let res = await getAllUsersApi();
        dispatch({type:GET_USER_SUCCESS,payload:res})
    }catch(err){
        dispatch({type:GET_USER_ERROR})
    }
}