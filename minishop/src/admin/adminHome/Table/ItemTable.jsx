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
} from "@chakra-ui/react";

const ItemTable = ({ data, toggleshow,sloading }) => {
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
    <TableContainer p='6'>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Catagory</Th>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Image</Th>
            <Th>Edit</Th>
            <Th>Disable</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((el,id) => {
            return (
              <Tr key={id}>
                <Td>{el.id}</Td>
                <Td>{el.Categories}</Td>
                <Td>{el.name.split(' ').slice(0,4).join(' ')}</Td>
                <Td>{el.brand}</Td>
                <Td>Image</Td>
                <Td cursor={'pointer'} > <EditIcon/> </Td>
                { sloading? <Spinner w='6' />:
                <Td>{el.show === true ?<ViewIcon fontSize={'xl'} cursor='pointer' onClick={()=>showMsg(`is out of Stock now`,'warning',el)} /> : <ViewOffIcon fontSize='xl' cursor='pointer' onClick={()=>showMsg(`is Back in Stock`,'success',el)} />}</Td>}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
