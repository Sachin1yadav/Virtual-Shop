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
} from "@chakra-ui/react";
const UserTable = ({ data,toggleshow,sloading }) => {
  return (
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
          {data.map((el,id) => {
            return (
              <Tr key={id}>
                <Td>{el.id.split('').slice(0,6).join('')}...</Td>
                <Td w='20'  position={'relative'} ><Image border='1px' w='12' h='12' rounded='full' src={el.profile} /><Text h='4' w='4' rounded='full' bottom='3' right='6' bg={el.active?"green.500":"red.500"} position='absolute' ></Text> </Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td cursor="pointer" >Cart</Td>
                <Td > Wishlist</Td>
                <Td > Orders</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot> <Text >Total Users: {data.length} </Text> </Tfoot>
      </Table>
    </TableContainer>
  );
};
export default UserTable;