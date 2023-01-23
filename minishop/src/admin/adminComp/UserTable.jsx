import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Image,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import AllModal from "./AllModal";
const UserTable = ({ data,toggleshow,sloading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dataa,setDataa] = useState(null)
const handleModal = (el,nme)=>{
  setDataa({el,nme})
onOpen()
}
  return (
    <>
    <TableContainer p='8' fontWeight="semibold">
      <Table variant="striped" colorScheme="blue">
        <Thead >
          <Tr border='2px' left='0' right={'0'} >
            <Th>id</Th>
            <Th>Status</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Cart</Th>
            <Th>wishlist</Th>
            <Th>Orders</Th>
          </Tr>
        </Thead>
        <Tbody mt='20'>
          {data?.map((el,id) => {
            return (
              <Tr key={id}>
                <Td>{el.id?.split('').slice(0,6).join('')}...</Td>
                <Td w='20'  position={'relative'} ><Image border='1px' w='12' h='12' rounded='full' src={el.profile} /><Text h='4' w='4' rounded='full' bottom='3' right='6' bg={el.active?"green.500":"red.500"} position='absolute' ></Text> </Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td cursor="pointer" onClick={()=>handleModal(el,"cart")} >{el.cart?.length} items</Td>
                <Td cursor="pointer" onClick={()=>handleModal(el,"wishlist")}>{el.wishlist?.length} items </Td>
                <Td cursor="pointer" onClick={()=>handleModal(el,'orders')}>{el.orders?.length} items </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
        <Th mt='6'>Total Users: {data.length}</Th></Tr> </Tfoot>
      </Table>
    </TableContainer>
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <AllModal onClose={onClose} data={dataa} />
    </Modal>
    </>
  );
};
export default UserTable;