import { useEffect, useState } from "react";
import axios from "axios";
import ItemTable from "./Table/ItemTable";
import AdminNav from "./AdminNav";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const AdminHome = () => {
  const [loading, setLoading] = useState(false);
  const [sloading, setsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allprod, setAllProd] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getProducts = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://lackadaisical-volcano-larch.glitch.me/data?_page=${page}&_limit=10`
      );
      setAllProd(res.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };
  const toggleshow = (id) => {
    let dta = allprod.filter((el) => {
      if (el.id === id) {
        el.show = !el.show;
        return el;
      }
      return null;
    });
    editData(id, dta[0]);
    console.log(dta)
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
      setError(true);
    }
  };
  // Catgory request on Changing category 

  const handleCategory = (e)=>{
    if(e.target.value===''){
      getProducts();
    }else{
      getCategory(e.target.value)
    }
  }
  const getCategory = async(val)=>{
    let res = await axios.get(`https://lackadaisical-volcano-larch.glitch.me/data?Categories=${val}`)
    setAllProd(res.data)
  }
  if (error) {
    return <Heading>Some Error from Server Occured</Heading>;
  }
  return (
    <>
      <AdminNav handleCategory={handleCategory} />

      {/* ItemTable  */}

      <ItemTable data={allprod} toggleshow={toggleshow} sloading={sloading} />


      {/* Pagination  */}

      <Flex
        position="fixed"
        px="5"
        py="1"
        rounded={"xl"}
        bottom="2"
        left={"45%"}
        alignItems={"center"}
      >
        {" "}
        <Button
          isLoading={loading}
          variant={"outline"}
          size="sm"
          isDisabled={page === 1}
          onClick={() => setPage((val) => val - 1)}
        >
          {" "}
          <ChevronLeftIcon fontSize="xl" />{" "}
        </Button>{" "}
        <Text mx="5"> {page} </Text>{" "}
        <Button
          isLoading={loading}
          variant={"outline"}
          size="sm"
          onClick={() => setPage((val) => val + 1)}
        >
          {" "}
          <ChevronRightIcon fontSize={"xl"} />{" "}
        </Button>{" "}
      </Flex>
    </>
  );
};

export default AdminHome;
