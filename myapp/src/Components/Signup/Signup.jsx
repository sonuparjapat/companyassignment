'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,

} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { signup, signupfailure, signupsuccess } from '../../Redux/Authentication/SignUp/Action'
import axios from 'axios'
import { api } from '../../Redux/Api'

const initialdata={
    userName:"",
    password:"",
    firstName:"",
    lastName:"",
    dob:"",
     mobileNo:"", 
     emailId:""
}
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
const [signupdata,setSignupdata]=useState(initialdata)
const handlechange=(e)=>{
    const {name,value}=e.target
    setSignupdata((pre)=>({...pre,[name]:value}))
}

// converting orignal input dob into this format 12-Oct-2023
function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
const dispatch=useDispatch()
const navigate=useNavigate()
const signuphandle=useSelector((state)=>state.signupreducer)
const {isLoading,isError,done}=signuphandle
const toast=useToast()

// handling signuprequest here
const handlesubmit=(e)=>{
    e.preventDefault()
    // console.log(signupdata)
    const maindate=formatDate(signupdata.dob)

    // validation for mobile no
    const mobileNumberPattern = /^\d{10}$/;
    if (mobileNumberPattern.test(signupdata.mobileNo)) {
       dispatch(signup).then((res)=>{
        const isEmailInArray = res.data.some((element) => element.emailId === signupdata.emailId);
        // console.log(isEmailInArray)
        if(!isEmailInArray){
            axios.post(`${api}/users`,{...signupdata,dob:maindate}).then((res)=>{
                toast({description:"Signup Successfully",status:"success","position":"top",duration:2000})

                dispatch(signupsuccess())
                navigate("/login")
            })
        }else{
            toast({description:"Already Registered user",status:"error","position":"top",duration:2000})
            dispatch(signupfailure())
        }
       }).catch((err)=>{
        dispatch(signupfailure())
       })
           
    }else{
      toast({description:"Please Provide a valid Mobile No.",status:"error","position":"top",duration:2000}) 
    }
   
}
// console.log(done,)
  return (
    <>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
     
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form onSubmit={handlesubmit}>

            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  name="firstName"  onChange={handlechange} value={signupdata.firstName} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastName" onChange={handlechange} value={signupdata.lastName} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="userName" isRequired>
                  <FormLabel>userName</FormLabel>
                  <Input type="text" name="userName" onChange={handlechange} value={signupdata.userName}/>
                </FormControl>
            <FormControl id="emailId" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="emailId" onChange={handlechange} value={signupdata.emailId} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={handlechange} value={signupdata.password} name="password" type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
             
            </FormControl>
            <FormControl id="dob" isRequired>
              <FormLabel>D.O.B</FormLabel>
              <Input name="dob"  onChange={handlechange} value={signupdata.date} type="date" />
            </FormControl>
            <FormControl id="mobileNo" isRequired>
              <FormLabel>MobileNo.</FormLabel>
              <Input  name="mobileNo" onChange={handlechange} value={signupdata.mobileNo}type="number" />
            </FormControl>
            <Stack spacing={10} pt={2}>
                {isLoading?
                   <Button
                
                     size="lg"
                     bg={'blue.400'}
                     color={'white'}
                     _hover={{
                       bg: 'blue.500',
                     }}>
                    Loading...
                   </Button>:
              <Button
              type="submit"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>}
            </Stack></form>
            <Stack pt={6}>
           <Text align={'center'}>
                Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex></>
  )
}