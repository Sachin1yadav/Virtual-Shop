import React, { useState } from 'react'
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
    FormControl,
    Input,
    FormLabel,
    Textarea,
    Text,
    Image,
    Grid,
  } from '@chakra-ui/react'
import axios from 'axios'
const EditModal = ({onClose, data}) => {
        const [product, setProduct] = useState({Categories:data?.Categories,brand:data?.brand,name:data?.name,details:""})
        const updateProduct = async()=>{
          let newProd = {...data,Categories:product.Categories,brand:product.brand,name:product.name,desc:product.details}
            try {
              await axios.patch(`${process.env.REACT_APP_BASE_URL}/data/${data.id}`,newProd);
            } catch (err) {
              console.log(err)
            }
            onClose()
        }
        const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value })
        }
        return (
          <><ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel display='flex' >Category <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input placeholder='Product Catagory' name="Categories" value={product.Categories} onChange={handleChange} />
                  </FormControl>
                  <FormControl>
                  <FormLabel display='flex' >Product Brand <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input placeholder='Product Brand' name='brand' required value={product.brand} onChange={handleChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel display='flex' >Product Name <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input placeholder='Product Name' name='name' onChange={handleChange} value={product.name} />
                  </FormControl>
                  <FormControl mt={4}>
                  </FormControl>
                    <FormLabel display='flex' >Product Detail <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Textarea placeholder='Product Description...' name='desc' value={product.desc} onChange={handleChange} />
                  <Grid templateColumns={'repeat(3,1fr)'} gap='5' my='4' > 
                   {data.image?.map((el,id)=><Image w='60%' h='150px' key={id} src={el} />)}
                  </Grid>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' onClick={updateProduct} mr={3}>
                    Update Product
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
          </>
        )
}

export default EditModal;