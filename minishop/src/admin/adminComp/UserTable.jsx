import { ViewIcon, EditIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";

const UserTable = ({ data,toggleshow,sloading }) => {
  const toast = useToast()
  const showMsg = (msg, status,el)=>{
    toggleshow(el.id)
    toast({
      title: `${el.name + " " + msg }`,
      status: status,
      isClosable:true,
      position:'top-right'
    })
  }

  return (
    <TableContainer p='8'>
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
          {data.map((el,id) => {
            return (
              <Tr key={id}>
                <Td>{el.id.split('').slice(0,6).join('')}...</Td>
                <Td w='20'  position={'relative'} ><Image border='1px' w='12' h='12' rounded='full' src={el.profile} /><Text h='4' w='4' rounded='full' bottom='3' right='6' bg={el.active?"green.500":"red.500"} position='absolute' ></Text> </Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td>Image</Td>
                <Td cursor={'pointer'} > <EditIcon/> </Td>
                { sloading? <Spinner w='6' />:
                <Td>{el.show === true ?<ViewIcon fontSize={'xl'} cursor='pointer' onClick={()=>showMsg(`is out of Stock now`,'warning',el)} /> : <ViewOffIcon fontSize='xl' cursor='pointer' onClick={()=>showMsg(`is Back in Stock`,'success',el)} />}</Td>}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot><Text>Total Users: {data.length} </Text> </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
