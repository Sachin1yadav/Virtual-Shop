import React, { useState } from 'react'
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
    Grid,
  } from '@chakra-ui/react'
// import { useState } from 'react'

const EditModal = ({show,data}) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null) 
        const [product, setProduct] = useState({})
        
        const updateProduct = ()=>{
          onClose()
        }
        const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value })
        }

        return (
          <>
            <Button h='0' p='0' m='0' w='0' ref={show} onClick={onOpen}></Button>
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
                    <Input ref={initialRef} placeholder='Product Catagory' name="Categories" value={data.Categories} onChange={handleChange} />
                  </FormControl>
                  <FormControl>
                  <FormLabel display='flex' >Product Brand <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Product Brand' name='brand' required value={data.brand} onChange={handleChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel display='flex' >Product Name <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Product Name' name='name' onChange={handleChange} value={data.name} />
                  </FormControl>
                  <FormControl mt={4}>
                  </FormControl>
                  <Grid templateColumns={'repeat(2,1fr)'} gap='5' > 
                   {data.image?.map((el,id)=><Image key={id} src={el} />)}
                  </Grid>
                    <FormLabel display='flex' >Product Detail <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Textarea placeholder='Product Description...' name='desc' value={data.des} onChange={handleChange} />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' onClick={updateProduct} mr={3}>
                    Update Product
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default EditModal;