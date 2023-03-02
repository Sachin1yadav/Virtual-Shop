import {Accordion} from "@chakra-ui/react";
  import AccordionwithButton from "./AccordionwithButton";
  export const LeftSideFilter = ({ setPrice, setOrder }) => {
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