/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import ItemTable from "./Table/ItemTable";
import AdminNav from "./AdminNav";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { getAllProducts, getProdCatagoty, getProductsAdmin } from "../../redux/admin_data/admin.action";
import { useDispatch, useSelector } from "react-redux";
const AdminHome = () => {
  const dispatch = useDispatch()
  const [sloading, setsLoading] = useState(false);
  const {loading, error, products,allProd}= useSelector(val=>val.adminAll)
  const [page, setPage] = useState(1);
  const [view, setView ] = useState(true)
  const [total, setTotal ] = useState(0)
  const [cat, setCat] = useState([])
  useEffect(() => {
    dispatch(getProductsAdmin(page));
  }, [dispatch, page]);

  let obj = {}
  const catagory = []
  useEffect(()=>{
    dispatch(getAllProducts())
    if(allProd.length>0){
      setTotal(allProd.length)
      allProd.forEach((el)=>{
        if(obj[el.Categories]===undefined){
          obj[el.Categories]=1
        }else{
          obj[el.Categories]++
        }
      })
    }
    for(let key in obj){
      catagory.push(key)
    }
    setCat(catagory)
  },[allProd.length, dispatch])

  const toggleshow = (id) => {
    let dta = products.filter((el) => {
      if (el.id === id) {
        el.show = !el.show;
        return el;
      }
      return null;
    });
    editData(id, dta[0]);
  };
  const editData = async (id, data) => {
    try {
      setsLoading(true);
      await axios.patch(
        `https://lackadaisical-volcano-larch.glitch.me/data/${id}`,
        data
      );
      setsLoading(false);
    } catch (err) {
    }
  };
  // Catgory request on Changing category 
  const handleCategory = (e)=>{
    if(e.target.value===''){ 
      dispatch(getProductsAdmin(page));
      setView(true)
    }else{
      dispatch(getProdCatagoty(e.target.value))
      setView(false)
    }
  }
  if (error) {
    return <Heading>Some Error from Server Occured</Heading>;
  }
  return (
    <Box>
      <AdminNav handleCategory={handleCategory} catagory={cat} />

      {/* ItemTable  */}
      
      <ItemTable data={products} total={total} toggleshow={toggleshow} sloading={sloading} />
      {/* Pagination  */}
    {view &&  <Flex
        position="fixed"
        px="5" 
        py="1"
        rounded={"xl"}
        bottom="2"
        left={"45%"}
        alignItems={"center"}
      >
        
        <Button
          isLoading={loading}
          variant={"outline"}
          size="sm"
          isDisabled={page === 1}
          onClick={() => setPage((val) => val - 1)}
        >
          
          <ChevronLeftIcon fontSize="xl" />
        </Button>
        <Text mx="5"> {page} </Text>
        <Button
          isDisabled={page===Math.floor(total/10)}
          isLoading={loading}
          variant={"outline"}
          size="sm"
          onClick={() => setPage((val) => val + 1)}
        >
          
          <ChevronRightIcon fontSize={"xl"} />
        </Button>
      </Flex>}
    </Box>
  );
};

export default AdminHome;
