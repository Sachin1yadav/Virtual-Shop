let imgUrl;




export const uploadImg1 =async()=>{
    let img_address = document.getElementById('imageUpload');
    let filePath = img_address.files[0];
    let form = new FormData();
    form.append('image',filePath);
    
    let api_key = '28637f54cd49bcfaf5a6e92f18203898'
    try{
        let res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`,{
            method:'POST',
            body:form,
        });
        let data = await res.json();
        imgUrl = data.data.display_url
    }catch(err){
        console.log(err)
    }
    let loading = document.getElementById('image_label');
    loading.textContent = 'Select from Computer'
    let loading_img = document.getElementById('photo_vdo');
    loading_img.src='https://cdn.iconscout.com/icon/premium/png-128-thumb/photo-122-88145.png'
    let preview = document.getElementById('preview');
    preview.style.display='flex';
    document.getElementById('post_modal_box').style.display='none'
    let img = document.createElement('img');
    let img_div = document.getElementById('img_preview');
    img.setAttribute('src',imgUrl);
    img_div.append(img)
}


export const addProduct = (newUser) => (dispatch)=>{
    
}