import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
    FormControl,
    useDisclosure,
    Input,
    FormLabel,
    Textarea,
    Text,
    Image,
    // Image
  } from '@chakra-ui/react'
  import { useDispatch } from 'react-redux'
  import { addProduct, uploadImg1 } from '../../redux/admin_data/admin.action'
import { useState } from 'react'

const AdModal = ({showModal}) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [image1, setImage1] = useState()
        const dispatch= useDispatch()
       console.log(image1)
        // "Categories": "t_shirt",
        // "image": [
        // "https://m.media-amazon.com/images/I/81DM22NKVuL._AC_UL320_.jpg",
        // "https://m.media-amazon.com/images/I/819qvoSGpyL._UL1500_.jpg",
        // "https://m.media-amazon.com/images/I/91CehbPYmcL._UL1500_.jpg",
        // "https://m.media-amazon.com/images/I/710ApMFOlfL._UL1500_.jpg",
        // "https://m.media-amazon.com/images/I/A1X866WxXBL._UL1500_.jpg"
        // ],
        // "brand": "Allen Solly",
        // "name": "Men's Regular Fit Polo",
        // "rating": "4.1 ",
        // "price": " 599",
        // "og_price": " 1,099",
        // "saving": "Save  500 (45%)",
        // "id": "1",
        // "show": false

        const [prod_data, setProd_data]= useState({Categories:'',image:[],brand:'',name:'', rating:"4.2",price:'',or_price:"",saving:"",show:false})
        const initialRef = React.useRef(null)

        const finalRef = React.useRef(null)
        const upload1 = (e)=>{
          setImage1(e.target.value);
          dispatch(uploadImg1(e.target.value))
        } 



//         const imgUpload = async()=>{
//         let api_key = '28637f54cd49bcfaf5a6e92f18203898'
//     try{
//         let res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`,{
//             method:'POST',
//             body:file,
//         });
//         let data = await res.json();
//         imgUrl = data.data.display_url;
//         setImg(imgUrl)
//     }catch(err){
//         console.log(err)
//     }
// }


        return (
          <>
            <Button h='0' p='0' m='0' w='0' ref={showModal} onClick={onOpen}></Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel display='flex' >Category <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Product Catagory' />
                  </FormControl>
                  <FormControl>
                  <FormLabel display='flex' >Product Brand <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Product Brand' required />
                  </FormControl>
                  <FormControl>
                    <FormLabel display='flex' >Product Name <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Product Name' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel display='flex' >Product Detail <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Textarea placeholder='Product Description...' />
                  </FormControl>
                  <FormControl mt={4} >
                    <FormLabel htmlFor='image1' border='2px' h='40' >
                      <Image src={image1} />
                      <Input type='file' accept='image' id='image1' onChange={()=>upload1}/>
                    </FormLabel>
                    <FormLabel htmlFor='image2' >
                      <Input type='file' accept='image' id='image2'  />
                    </FormLabel>
                    <FormLabel htmlFor='image3'>
                      <Input type='file' accept='image' id='image3'  />
                    </FormLabel>
                    <FormLabel htmlFor='image4'>
                      <Input type='file' accept='image' id='image4'  />
                    </FormLabel>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={()=>dispatch(addProduct(prod_data))} >
                    Add
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default AdModal