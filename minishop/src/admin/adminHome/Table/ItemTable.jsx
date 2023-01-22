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
import { useState } from "react";
import { useRef } from "react";
import EditModal from "../../AddProduct/EditModal";

const ItemTable = ({ data,total, toggleshow,sloading }) => {
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
  const [dataa, setDataa] = useState({})
  const showModal = useRef(null)
  const editItem  = (el)=>{ 
   showModal.current.click()
   setDataa(el)
  }

  return (
    <>
    <TableContainer mt='6' fontWeight='semibold' p='8'>
      <Table variant="striped" colorScheme="blue">
        <Thead >
          <Tr border='2px' left='0' right={'0'} >
            <Th>id</Th>
            <Th>Catagory</Th>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Image</Th>
            <Th>Edit</Th>
            <Th>Disable</Th>
          </Tr>
        </Thead>
        <Tbody mt='20'> 
          {data.map((el,id) => {
            return (
              <Tr key={id}>
                <Td>{el.id}</Td>
                <Td>{el.Categories}</Td>
                <Td>{el.name.split(' ').slice(0,4).join(' ')}</Td>
                <Td>{el.brand}</Td>
                <Td px='4' ><Image src={el.image[0]} w='50%' border='2px' /></Td>
                <Td cursor={'pointer'} > <EditIcon onClick={()=>editItem(el)} /> </Td>
                { sloading? <Spinner w='6' />:
                <Td>{el.show === true ?<ViewIcon fontSize={'xl'} cursor='pointer' onClick={()=>showMsg(`is out of Stock now`,'warning',el)} /> : <ViewOffIcon fontSize='xl' cursor='pointer' onClick={()=>showMsg(`is Back in Stock`,'success',el)} />}</Td>}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot><Text>Total Items in Inventory: {total} </Text> </Tfoot>
      </Table>
    </TableContainer>
    <EditModal show={showModal} data={dataa} />
    </>
  );
};

export default ItemTable;
