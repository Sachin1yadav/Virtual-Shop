import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AllModal = ({ onClose, data }) => {
  const { el, nme } = data;
  const [item, setItem] = useState([]);
  useEffect(()=>{
    switch (nme) {
        case "cart":{
            setItem(el?.cart)
            break
        }
        case "wishlist":{
            setItem(el?.wishlist)
            break
        }
        case "orders":{
            setItem(el?.orders)
            break
        }
        default:{
            return [] 
        }
    }
    },[el.cart, el.orders, el.wishlist, nme])
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {el.name}"s {nme}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {item?.length === 0 ? (
            <Text>No Items in the {nme} </Text>
          ) : (
            item?.map((el, id) => (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={id}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={el?.image[1]}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="base">{el.name}</Heading>
                    <Text py="2">
                     {el?.desc}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue" isDisabled={true} >
                      Cancel
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default AllModal;
