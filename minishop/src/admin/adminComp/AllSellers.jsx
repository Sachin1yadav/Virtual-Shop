import {Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSellers = () => {
  const nav = useNavigate()
  return (
    <Flex w='screen'>
      <Image src='https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png'  />
      <Heading onClick={()=>nav('/admin')} borderBottom='2px' h='fit-content' cursor='pointer' color='blue' >Go Back To Home</Heading>
    </Flex>
  )
}

export default AdminSellers