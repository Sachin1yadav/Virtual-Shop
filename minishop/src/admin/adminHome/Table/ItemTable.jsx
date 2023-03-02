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
  Image,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import EditModal from "../../AddProduct/EditModal";
const ItemTable = ({ data, total, toggleshow, sloading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const showMsg = (msg, status, el) => {
    toggleshow(el.id);
    toast({
      title: `${el.name + " " + msg}`,
      status: status,
      isClosable: true,
      position: "top-right",
    });
  };
  const [elementData, setElementData] = useState({});

  const editItem = (el) => {
    onOpen();
    setElementData(el);
  };

  return (
    <>
      <TableContainer mt="6" fontWeight="semibold" p="8">
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr left="0" right={"0"}>
              <Th>Name</Th>
              <Th>Catagory</Th>
              <Th>Brand</Th>
              <Th>Image</Th>
              <Th>Edit</Th>
              <Th>Disable</Th>
              <Th w='20'>id</Th>
            </Tr>
          </Thead>
          <Tbody mt="20">
            {data.map((el, id) => {
              return (
                <Tr key={id}>
                  <Td>{el.name.split(" ").slice(0, 4).join(" ")}</Td>
                  <Td  >{el.Categories}</Td>
                  <Td>{el.brand}</Td>
                  <Td w="20">
                    <Image src={el.image[1]} w="100%" rounded="md" />
                  </Td>
                  <Td cursor={"pointer"}>
                    {" "}
                    <EditIcon fontSize='24' onClick={() => editItem(el)} />{" "}
                  </Td>
                  {sloading ? (
                    <Spinner w="8" m='auto' />
                    ) : (
                      <Td>
                      {el.show === true ? (
                        <ViewIcon
                        fontSize={"28"}
                        cursor="pointer"
                        onClick={() =>
                          showMsg(`is out of Stock now`, "warning", el)
                        }
                        />
                        ) : (
                          <ViewOffIcon
                          fontSize='28'
                          cursor="pointer"
                          onClick={() =>
                            showMsg(`is Back in Stock`, "success", el)
                          }
                          />
                          )}
                    </Td>
                  )}
                  <Td w='20px'>{el.id}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot><Tr>
        <Th mt='6'> Total Items in Inventory: {total}</Th></Tr> 
            </Tfoot>
        </Table>
      </TableContainer>
      <Modal
        onClose={onClose} size={"xl"} isOpen={isOpen}
      >
        <EditModal onClose={onClose} data={elementData} />
      </Modal>
    </>
  );
};

export default ItemTable;
