import { Accordion, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents";


export const LeftSideFilter = () => {

    const init = {
        Gender: { Men: false, Women: false, Kids: false },
        Category: { Cloths: false, Shoes: false },
        Size: { Small: false, Medium: false, Large: false },
        Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
    }

    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [manageFilter, setManageFilter] = useState(init);
    
    const toast = useToast();

    const handleFilterChange = ({ target: { name, value, checked } }) => {
        setManageFilter({
            ...manageFilter,
            [name]: {
                ...manageFilter[name],
                [value]: checked
            }
        })
    };

    const handleFilterApply = (e) => {
       
        // (toast, "Filter Applied Successfully", "success", 1000);
    }

    const handleChange = ({ target: { value, name } }) => {
        setPriceRange({ ...priceRange, [name]: value })
    }

    const handleSubmit = () => {
        
    //    (toast, "Price Range Applied Successfully", "success", 1000);
    }


    return (
        <Accordion allowMultiple>
            <PriceFilter handleChange={handleChange} handleSubmit={handleSubmit} />
            { <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Brand'} item={['Men', 'Women', 'Kids']} />}
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Category'} item={['T-shirt', 'Shoes']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Size'} item={['Small', 'Medium', 'Large']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Blue']} />
        </Accordion>
    );
};