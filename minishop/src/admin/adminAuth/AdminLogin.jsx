import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import { useState,} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import { getAdminAuth } from '../../redux/admin_auth/admin.actions';
export default function AdminLogin() {
  const toast = useToast()
    const {loading, error} =  useSelector(val=>val.adminAuth)
    const [user, setUser] = useState({email:'',password:""})
    const dispatch = useDispatch()
    const handleLogin = ()=>{
      dispatch(getAdminAuth(user))
    }
    const handleChange = (e)=>{
      setUser({...user, [e.target.name]:e.target.value })
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin Sign In </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Make Sure you have Admin Access
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={user.email} name='email' onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={user.password} onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  isLoading={loading}
                  onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        {
                  error?toast({
                    title: `Invalid Credentials !`,
                    status: 'error',
                    isClosable: true,
                  }):null
                }
      </Flex>
    );
  }