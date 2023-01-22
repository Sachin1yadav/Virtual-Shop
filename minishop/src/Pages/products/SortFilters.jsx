import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

export const SortFilters = () => {
  const handleChange = () => {};

  return (
    <Box>
      <Menu>
        <MenuButton
          fontSize={["13px", "16px"]}
          as={Button}
          rightIcon={<AiOutlineDown />}
        >
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleChange}>Price: Low-High</MenuItem>
          <MenuItem onClick={handleChange}>Price: High-Low</MenuItem>
          <MenuItem onClick={handleChange}>Rating: Low-High</MenuItem>
          <MenuItem onClick={handleChange}>Rating: High-Low</MenuItem>
          <MenuItem onClick={handleChange}>Name: A-Z</MenuItem>
          <MenuItem onClick={handleChange}>Name: Z-A</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
