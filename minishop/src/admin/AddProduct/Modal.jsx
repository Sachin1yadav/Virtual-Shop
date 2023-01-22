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
                  <FormLabel display='flex' >Image 1 url <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Image 1 url' />
                  <FormLabel display='flex' >Image 2 url <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Image 2 url' />
                  <FormLabel display='flex' >Image 3 url <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Image 3 url' />
                  <FormLabel display='flex' >Image 4 url <Text color='red' mx='1' >*</Text> </FormLabel>
                    <Input ref={initialRef} placeholder='Image 4 url' />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
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