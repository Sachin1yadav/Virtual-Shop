import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";

import axios from "axios"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Box,
  Flex,
  Image,
  Button,useToast,Divider, Heading 
} from '@chakra-ui/react'

import {FaAngleRight ,FaHeart,FaAngleDown } from "react-icons/fa"

import {MdOutlineCrueltyFree,MdOutlineWaterDrop,MdSettings,MdOutlineAssignmentReturn} from "react-icons/md"

import { Link } from 'react-router-dom';


const SinglePage = () => {
// const { id } = useParams()
  let id =1;
  const {loading , error, itemDetail} = useSelector((store) => store.singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getSingleProduct(id))
  }, []);

    
    // const [itemDetail, setItemDetail] = useState({})

    // const getData = async(id) => {
    //    let res = await fetch(`https://b-tmart-api-5tjm.vercel.app/data/${id}`)
    //    let data  = await res.json();
    //    console.log('data:', data)
    //    setItemDetail(data)
    // }

    // useEffect(() => {
    //   getData(id)
    //     // fetch(`https://b-tmart-api-5tjm.vercel.app/data/${id}`)
    //     //   .then((res) => res.json())
    //     //   .then((res) => setItemDetail(res))
    //     //   .catch((err) => console.log(err))
    // }, [id])

    console.log(id)
    console.log("singleProductData",itemDetail)

  const toast = useToast()

  const likeFuc = () => {
    
      toast({
        // colorScheme:'yellow',
        title: 'Added to wishlist',
        description: "We've added this item to wishlist",
        variant:'subtle',
        duration: 3000,
        isClosable: true,
        
      })
  }

  
  const handleWishlist = (item) => {
    return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`,item)
  }


  const addtoCart = () => {
    toast({
      // colorScheme:'yellow',
      title: 'Added to Cart',
      description: "We've added this item to Cart",
      variant:'subtle',
      duration: 3000,
      isClosable: true,
      
    })

    // alert("We've added this item to Cart")
  }

  const handleAddCart = (item) => {
    return axios.post(`https://busy-peplum-fawn.cyclic.app/cart`,item)
  }


  const hideDiv = {
    display:'none',
    width:'90%',
    margin:"auto",
    marginTop:'20px',
    
}

const [angle,setAngle] = useState(false)

const handleReadMore = () =>{
    const targetDiv = document.getElementById("disHideDiv");
    // document.getElementById("hideDiv").style.display = "block"
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        setAngle(false)
      } else {
        targetDiv.style.display = "block";
        setAngle(true)
      }
}


  if(loading) return <h3>Loading...</h3>;
  if(error) return <h3>Error...</h3>;
  return (
    <div>
      <Box w={'90%'} margin='auto' >
            <Box marginTop={5}>
                <Breadcrumb marginLeft={-10} alignItems='left' spacing='8px' separator={<FaAngleRight color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <Text noOfLines={1}>{itemDetail.name}</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <Flex marginTop={15} gap={5}  flexDirection='row' >

                <Flex  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" flexDirection={'row'} flex={5} overflowY="auto"> 
                  {/* <Flex flexDirection={'column'} flex={4}>
          
                    
                    <Image  width={'40%'} height={'100px'} src={itemDetail?.image[1]} alt="detailsimage" 
                    display={'block'} margin='auto'/>

                    <Image width={'40%'} height={'100px'} src={itemDetail?.image[2]} alt="detailsimage" 
                    display={'block'} margin='auto'/>

                    <Image width={'40%'} height={'100px'} src={itemDetail?.image[3]} alt="detailsimage" 
                    display={'block'} margin='auto'/>

                    <Image width={'40%'} height={'100px'} src={itemDetail?.image[4]} alt="detailsimage" 
                    display={'block'} margin='auto'/>
                  </Flex>
                  <Flex  flex={6}>
                  <Image width={'50%'} height={'400px'} src={itemDetail?.image[0]} alt="detailsimage" 
                    display={'block'} margin='auto'/> 
                  </Flex> */}


                  {/* Images Map */}
                  <Box display={'flex'} flexDirection='column' >
                  {
                    itemDetail?.image?.map((el,i)=>(
                      <div key={i}>
                      <Image width={'50%'}  key={el.id} height={'400px'} src={el} alt="detailsimage" 
                       display={'block'} margin='auto'/></div>
                    ))
                  } 
                  </Box> 
                  
                </Flex>

                <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={5} flex={5}>
                    <Text textAlign={'justify'} fontSize={20} fontWeight={500}>{itemDetail.name}</Text>
                    <Text marginTop={5} w={'20%'} borderRadius={'10px'} border={'1px solid gray'}> ★ {itemDetail.rating}</Text>

                    <Flex marginTop={10} gap={8} alignItems='center'>
                        <Text fontSize={20}>{itemDetail.price}</Text>
                        <Button h={18} padding={'3px 5px'} fontSize={12} borderRadius={4} color={'white'} bg={'#2d8c00' }>FREE SHIPPING</Button>
                        <Text fontStyle= "italic"
                            opacity= '.7'
                            marginLeft={5}
                            fontWeight={400}
                            fontSize={9}
                            lineHeight='10.55px'>(T&C applicable)</Text>
                    </Flex>

                    <Text marginTop={10} fontSize={20} textAlign='justify'>AVAILABLE OFFERS!!</Text>
                    <ul style={{textAlign:'justify' , marginTop:'10px', marginLeft:'20px'} }>
                        <li>Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999 <span style={{textDecoration:'underline'}}> Know More</span></li>
                        <li>Grab A Complimentary Product Worth Rs.1400 On A Spend Of Rs.3399Grab A Complimentary Product Worth Rs.1400 On A Spend Of Rs.3399<span style={{textDecoration:'underline'}}> Know More</span></li>
                    </ul>

                    <div style={{ margin:" 10px 0px",
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "10px",
                            padding: "5px" }}>
                            <button style={{display:'flex',gap:'10px', alignItems:'center',justifyContent:'center' ,width: "120px",
                            backgroundColor: "#232f3e",
                            color:"white",
                            padding: "8px",
                            borderRadius:"10px",}} onClick={()=> {
                                handleWishlist(itemDetail)
                                likeFuc()
                            }}>WISHLIST<FaHeart/></button>
                            <button style={{width: "120px",
                            backgroundColor: "#232f3e",
                            color:"white",
                            padding: "8px",
                            borderRadius:"10px"}} onClick={()=> {
                                handleAddCart(itemDetail)
                                addtoCart()
                            }}>ADD TO CART</button>
                    </div>

                    <Divider variant="dashed" borderColor="gray.500"/>

                    <Flex fontSize={15} marginTop={5} marginBottom={5} gap={5} alignItems='center'>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineCrueltyFree/>
                            <Text>Cruelty Free</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineAssignmentReturn/>
                            <Text>Easy Return</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdSettings/>
                            <Text>Quality First</Text>
                        </Flex>
                        <Flex alignItems='center' gap={1}>
                            <MdOutlineWaterDrop/>
                            <Text>Dermatologically Tested</Text>
                        </Flex>
                    </Flex>
                    <Divider variant="dashed" borderColor="gray.500"/>
                    
                    <div style={{display:'flex', alignItems:'center' , justifyItems:'flex-start' ,marginTop:'10px' , marginBottom:'10px'}} >
                        <h1 style={{fontSize:'18px', fontWeight:'600'}}>Description</h1>
                        <button style={{fontSize:'20px', marginLeft:'10px',color:'#fb3380', cursor:'pointer'}} onClick={handleReadMore}>{angle ? <FaAngleDown/>:<FaAngleRight/>}</button>
                    </div>
                    <div id="disHideDiv" style={hideDiv}>
                        <p style={{textAlign:'justify'}}>{itemDetail.discription}</p>
                    </div>
                    <Divider variant="dashed" borderColor="gray.500"/>

                     <Link to={'/cart'}><Button display={'block'}  marginBottom={8} marginTop={8} bg={'#232f3e'} color='white' padding={2} _hover={'#00000'}> GO TO CART</Button></Link>
                </Box>
    
            </Flex>
      </Box>

      {/* <Heading>Similar Products</Heading>
      <Box>

      </Box> */}
    </div>
  );
};

export default SinglePage;
