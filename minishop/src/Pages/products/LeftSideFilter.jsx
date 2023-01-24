import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionwithButton from "./AccordionwithButton";
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents";

export const LeftSideFilter = ({ setPrice, setOrder }) => {
  const init = {
    Gender: { Men: false, Women: false, Kids: false },
    Category: { Cloths: false, Shoes: false },
    Size: { Small: false, Medium: false, Large: false },
    Colour: {
      Black: false,
      White: false,
      Green: false,
      Red: false,
      Mix: false,
    },
  };

  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: Infinity,
  });
  const [manageFilter, setManageFilter] = useState(init);

  const toast = useToast();

  const handleFilterChange = ({ target: { name, value, checked } }) => {
    setManageFilter({
      ...manageFilter,
      [name]: {
        ...manageFilter[name],
        [value]: checked,
      },
    });
  };

  const handleFilterApply = (e) => {
    // (toast, "Filter Applied Successfully", "success", 1000);
  };

  const handleChange = ({ target: { value, name } }) => {
    setPriceRange({ ...priceRange, [name]: value });
  };

  const handleSubmit = () => {
    //    (toast, "Price Range Applied Successfully", "success", 1000);
  };

  return (
    <Accordion allowMultiple>
      <AccordionwithButton
        setOrder={setOrder}
        values={"price"}
        bt1={"Low to High"}
        bt2={"High to Low"}
        title={"Price"}
        setPrice={setPrice}
      />

      {
        <AccordionwithButton
          setOrder={setOrder}
          values={"brand"}
          bt1={"A-Z"}
          bt2={"Z-A"}
          title={"Brand"}
          setPrice={setPrice}
        />
      }
      <AccordionwithButton
        setOrder={setOrder}
        values={"rating"}
        bt1={"Low to High"}
        bt2={"High to Low"}
        title={"Rating"}
        setPrice={setPrice}
      />
      
    </Accordion>
  );
};
