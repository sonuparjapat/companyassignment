'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signin, signinfailure, singinsuccess } from '../../Redux/Authentication/Action'
import ProfileModel from './ProfileModel'

const initialdata={
    emailId:"",
    password:""
}
const intuserprofile={
    "userName":"",
    "firstName":"",
    "lastName":"",
    "emailId":"",
    mobileNo:"",
    dob:""
}
export default function SignIn() {
    const [signindata,setSignindata]=useState(initialdata)
    const [foranychange,setForanyChange]=useState(false)
    const [userprofile,setUserprofile]=useState(intuserprofile)
    const handlechange=(e)=>{
        const {name,value}=e.target
        setSignindata((pre)=>({...pre,[name]:value}))
    }
    const handleupdate=()=>{
      setForanyChange(!foranychange)
    }
    useEffect(()=>{

    },[foranychange])
    const dispatch=useDispatch()
    const toast=useToast()
    const navigate=useNavigate()
    const signhandle=useSelector((state)=>state.signinreducer)
    const {isLoading,isError,userdata}=signhandle
    const handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(signindata)
dispatch(signin).then((res)=>{
   const ispresent=res.data.some((element)=>element.emailId==signindata.emailId&&element.password==signindata.password)
   if(ispresent){
toast({description:"Login Successfully",status:"success",position:"top",duration:2000})
const foundUser = res.data.find((user) => user.emailId === signindata.emailId && user.password === signindata.password);
dispatch(singinsuccess(foundUser))
setUserprofile(foundUser)

   }else{
    toast({description:"Not a Registered User",status:"error",position:"top",duration:2000}) 
    dispatch(signinfailure())
   }
   
}).catch((err)=>dispatch(signinfailure()))
    }
const {userName,firstName,lastName,emailId,mobileNo,dob,id}=userprofile
  return (
    <>
     <ProfileModel id={id} isOpen={userName} onClose={() => setUserprofile(intuserprofile)}  userName={userName} firstName={firstName}
lastName={lastName} emailId={emailId} mobileNo={mobileNo} dob={dob} handleupdate={handleupdate}     />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <form onSubmit={handlesubmit}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handlechange} value={signindata.emailId} name="emailId" type="email" />
            </FormControl>
            <FormControl id="password" isRequired> 
              <FormLabel>Password</FormLabel>
              <Input  onChange={handlechange} value={signindata.password} name="password" type="password" />
            </FormControl>
            <Stack spacing={10}>
            
          {isLoading?  <Button
      
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
             Loading...
              </Button>:   <Button
              type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>}
              <Box><Link to="/signup">Dont have a account? <Button>SignUp</Button></Link></Box>
            </Stack>
          </Stack>
        </Box></form>
      </Stack>
    </Flex>
   
    
    </>
  )
}