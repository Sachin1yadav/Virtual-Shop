import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { getProdCatagoty, getProductsAdmin } from '../../redux/admin_data/admin.action'
import AdminNav from '../adminHome/AdminNav'
import { useDispatch, useSelector } from "react-redux";

const AdmnUsers = () => {
  const dispatch = useDispatch()
  
  const handleCategory = (e)=>{
    if(e.target.value===''){ 
      dispatch(getProductsAdmin(1));
    }else{
      dispatch(getProdCatagoty(e.target.value))
    }
  }
  const catagory = ['user1']
  return (
    <>
     <AdminNav handleCategory={handleCategory} catagory={catagory} />
    <Flex>
      
      <Heading>All Users</Heading>

    </Flex>
    </>
  )
}

export default AdmnUsers