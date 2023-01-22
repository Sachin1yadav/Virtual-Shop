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

export const SortFilters = ({ setPrice, setOrder }) => {
  const handleChange = (e) => {
    setPrice(e.target.value);
    setOrder(e.target.name);
  };

  return (
    <Box>
      <Menu>
        <MenuButton
         style={{border:"1px solid gray"}}
          fontSize={["13px", "16px"]}
          as={Button}
          rightIcon={<AiOutlineDown />}
        >
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem value="price" name="asc" onClick={handleChange}>Price: Low-High</MenuItem>
          <MenuItem value="price" name="desc" onClick={handleChange}>Price: High-Low</MenuItem>
          <MenuItem value="rating" name="asc" onClick={handleChange}>Rating: Low-High</MenuItem>
          <MenuItem value="rating" name="desc" onClick={handleChange}>Rating: High-Low</MenuItem>
          <MenuItem value="brand" name="asc" onClick={handleChange}>Name: A-Z</MenuItem>
          <MenuItem value="brand" name="desc" onClick={handleChange}>Name: Z-A</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
