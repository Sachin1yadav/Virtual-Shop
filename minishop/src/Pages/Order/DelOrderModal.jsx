import { ModalCloseButton, ModalContent, ModalOverlay, Text,} from '@chakra-ui/react'
import React from 'react'
import { Button, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/Auth/auth.actions'

const DelOrderModal = ({onClose,data}) => {
  const { loading,userData } = useSelector((val) => val.authUser);
  const user = userData
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        // eslint-disable-next-line array-callback-return
        let updatedOrders = user.orders.filter(el=>{
            if(el.id!==data.id){return el}
        })
        dispatch(updateUser(user.id,{orders:updatedOrders}))
        .then(()=>onClose())
    }
  return (
    <>
    <ModalOverlay />
    <ModalContent mt='20%' p='6' >
      <ModalHeader><Text fontWeight='semibold' >Are You Sure To Delete Item : </Text> </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text m='2' >
            {data.name}
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button variant='outline' isLoading={loading} onClick={onClose}>Close</Button>
        <Button variant='danger' size='sm' onClick={handleDelete}>Yes</Button>
      </ModalFooter>
    </ModalContent>
  </>
  )
}

export default DelOrderModal