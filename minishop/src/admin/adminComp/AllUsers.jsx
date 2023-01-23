import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect} from 'react'
import { getAllUsers, getProdCatagoty, getProductsAdmin } from '../../redux/admin_data/admin.action'
import AdminNav from '../adminHome/AdminNav'
import { useDispatch, useSelector } from "react-redux";
import UserTable from './UserTable';

const AdmnUsers = () => {
  const dispatch = useDispatch()
  const allUsers = useSelector(val=>val.adminAll?.allUsers)
  const handleCategory = (e)=>{
    if(e.target.value===''){ 
      dispatch(getProductsAdmin(1));
    }else{
      dispatch(getProdCatagoty(e.target.value))
    }
  }
  useEffect(() => {
  dispatch(getAllUsers())
  }, [])
  
  const total = 0;
  const toggleshow=()=>{}
  const sloading=false
  const catagory = ['user1']




  return (
    <>
     <AdminNav handleCategory={handleCategory} catagory={catagory} />
    <Flex direction={'column'} mt='10' >
      <Heading>All Users</Heading>
      <UserTable data={allUsers} total={total} toggleshow={toggleshow} sloading={sloading} />
    </Flex>
    </>
  )
}

export default AdmnUsers