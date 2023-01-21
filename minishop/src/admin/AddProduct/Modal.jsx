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
    Textarea
  } from '@chakra-ui/react'

const AdModal = ({showModal}) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
      
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
                    <FormLabel>Category</FormLabel>
                    <Input ref={initialRef} placeholder='Product Catagory' />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Brand</FormLabel>
                    <Input ref={initialRef} placeholder='Product Brand' />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input ref={initialRef} placeholder='Product Name' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Product Detail</FormLabel>
                    <Textarea placeholder='Product Description...' />
                  </FormControl>
                  <FormControl mt={4}>
                    {/* <FormLabel>image</FormLabel>
                    <Textarea placeholder='Last name' /> */}
                    {/* <label id='profile_update' for='update_profile'>Update Profile<input type='file' id='update_profile' accept="image"></input> */}
                    <FormLabel for='image1'>
                      <Input type='file' accept='image' id='image1'  />
                      <Input type='file' accept='image' id='image2'  />
                      <Input type='file' accept='image' id='image3'  />
                      <Input type='file' accept='image' id='image4'  />
                    </FormLabel>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default AdModal