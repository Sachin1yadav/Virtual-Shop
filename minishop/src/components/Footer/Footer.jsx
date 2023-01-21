import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaTwitter,FaPinterestP,FaApple} from 'react-icons/fa';
import {IoLogoGooglePlaystore} from "react-icons/io5";
 const Footer = ({display='flex'}) => {
  return (
    <Box>
{/*---------------------------------    Top Footer  --------------------------------------------*/}
    <Flex width='screen' 
    textAlign={'start'}
     gap='2' lineHeight={'25px'}  mt={'60px'}  bg={'gray.700'} color={'whiteAlpha.800'} display={display} >
        
        <Box p='6' fontSize={'13px'}>
        <Text >LED Light</Text>
        <Text >Paints</Text>
        <Text >Corporate Gifts</Text>
        <Text >Geysers</Text>
        <Text >Welding</Text>
        <Text >tooling and Cutting</Text>
      </Box>
        
      <Spacer />
      <Box p='4' fontSize={'13px'}>
        <Text >Abrasives</Text>
        <Text >Power Tools</Text>
        <Text >Pumps</Text>
        <Text >Safety</Text>
        <Text >Bearings</Text>
        <Text >Cleaning</Text>
      </Box>

      <Spacer />
      <Box p='4' fontSize={'13px'}>
        <Text >Dimension Measurement</Text>
        <Text >Electrical</Text>
        <Text >Electronics & Robotics</Text>
        <Text >Fasteners</Text>
        <Text >Furniture, Hospitality and Food Service</Text>
        <Text >Hand Tools </Text>
      </Box>

      <Spacer />
      <Box p='4' fontSize={'13px'} display={{sm:"none",md:"block",lg:"block",base:"none"}}>
        <Text >Hydraulics</Text>
        <Text >IT & Electronics</Text>
        <Text >Industrial Automation</Text>
        <Text >Lab Supplies</Text>
        <Text >Machinery</Text>
        <Text >Machining Accessories</Text>
      </Box>

      <Spacer />
      <Box p='4' fontSize={'13px'} display={{sm:"none",md:"block",lg:"block",base:"none"}}>
        <Text >Medical Supplies & Equipment</Text>
        <Text >Office Supplies</Text>
        <Text >Plumbing</Text>
        <Text >Pneumatics</Text>
        <Text >Automotive Maintenance and Accessories</Text>
        <Text >Security</Text>
      </Box>
  </Flex>
  {/*---------------------------------    Bottom Footer  --------------------------------------------*/}
  <Flex width='screen' 
    textAlign={'start'}
     display={display}
     gap='2' lineHeight={'32px'}   bg={'gray.900'} color={'white'} >
        
        <Box p='7' fontSize={'15px'}>
        <Text fontSize={'18px'} color={'white'} fontWeight={'600'}>Company</Text>
        <Text >About Us</Text>
        <Text >Contact Us</Text>
        <Text >Careers</Text>
        <Text >Sell On Industrybuying</Text>
        <Text >Special offers</Text>
        <Text >Articles</Text>
      </Box>
        
      <Spacer />
      <Box p='7' fontSize={'15px'} display={{sm:"none",md:"block",lg:"block",base:"none"}}>
        <Text fontSize={'18px'} color={'white'} fontWeight={'600'} >Help</Text>
        <Text >FAQs </Text>
        <Text >Report Infringement</Text>
        <Text >Cancellations & Returns</Text>
        <Text color={'gray.900'}>-</Text>
        <Text fontSize={'18px'} color={'white'} fontWeight={'600'} >Have a question or want to place an order?</Text>
        <Text >Helpline Number: Call: +91 8448449073</Text>
      </Box>

      <Spacer />
      <Box p='7' fontSize={'15px'} >
        <Text fontSize={'18px'} color={'white'} fontWeight={'600'}>Connect with us</Text>
        <Text display={'flex'} 
        fontSize={'27px'} mt={'20px'} color={'whiteAlpha.700'}
         justifyContent={'space-evenly'}  >
            <FaFacebookF/><FaTwitter/><FaPinterestP/>
            </Text>
        <Text color={'gray.900'}>-</Text>
        <Text >Download Our APP!</Text>
        <Text display={'flex'} 
        fontSize={'27px'} mt={'20px'} color={'whiteAlpha.700'}
         justifyContent={'space-evenly'}  >
            <IoLogoGooglePlaystore/><FaApple/>
            </Text>
      </Box>

      <Spacer />
      <Box p='7' fontSize={'15px'} display={{sm:"none",md:"block",lg:"block",base:"none"}}>
        <Text fontSize={'18px'} color={'white'} fontWeight={'600'}>Subscribe to Newsletter</Text>
        
        <Text fontSize={'12px'}>Sign up to get exclusive offers from our favorite brands</Text>
        <Text fontSize={'12px'} mt={'-15px'} >and to be well up in the news</Text>
      </Box>

  </Flex>
{/*---------------------------------    Bottom Footer line  --------------------------------------------*/}
<Text textAlign={'center'}
       bg={'gray.700'} color={'white'} fontSize={'13px'}  fontWeight={'600'} >
        Copyright © industrybuying.com 2013-2022 All Right Reserved | Privacy Policy | Terms & Conditions
        </Text>
  </Box>
  )
}

export default Footer