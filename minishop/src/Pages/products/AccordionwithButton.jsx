import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AccordionwithButton = ({
  setOrder,
  setPrice,
  values,
  title,
  bt1,
  bt2,
}) => {
  return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={["14px", "18px"]}>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack direction={"column"} gap={"5px"}>
            <Button
              onClick={() => {
                setPrice(values);
                setOrder("asc");
              }}
            >
              <Text fontSize={["13px", "16px"]}>{bt1}</Text>
            </Button>
            <Button
              onClick={() => {
                setPrice(values);
                console.log(values);
                setOrder("desc");
              }}
            >
              <Text fontSize={["13px", "16px"]}>{bt2}</Text>
            </Button>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
  );
};

export default AccordionwithButton;
