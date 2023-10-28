import React, { useEffect, useState } from "react"
import {useDisclosure, 
    Input,FormLabel,FormControl,Button,AlertDialog,AlertDialogHeader,AlertDialogOverlay,AlertDialogBody,AlertDialogFooter,AlertDialogContent, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { deletefailure, deletesuccess, deleteuser } from "../../Redux/Delete/Action"
import { useNavigate } from "react-router-dom"
import { editfailure, editsuccuess, useredit } from "../../Redux/Edit/Action"
const initialdata={
    userName:"",
  
    firstName:"",
    lastName:"",
    dob:"",
     mobileNo:"", 
     emailId:""
}
export default function Edit({handleupdate,id,firstName,lastName,userName,emailId,mobileNo,dob}) {
    const [editdata,setEditdata]=useState(initialdata)
    useEffect(()=>{
        setEditdata((pre)=>({...pre,userName,firstName,lastName,dob:convertinoriginal(dob),mobileNo,emailId}))
    },[])
    // console.log(editdata)
    const handlechange=(e)=>{
        const {name,value}=e.target
        setEditdata((pre)=>({...pre,[name]:value}))
    }
 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
//   console.log(id)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

  function convertinoriginal(inputDate) {
    const months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
      };
    
      const parts = inputDate.split('-');
      const day = parts[0];
      const month = months[parts[1]];
      const year = parts[2];
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
  }
  const usereditdata=useSelector((state)=>state.usereditreducer)
  const {isLoading,isError}=usereditdata
  const toast=useToast()
  const handleedit=(id)=>{
  
 
    const maindate=formatDate(editdata.dob)
    const mobileNumberPattern = /^\d{10}$/;
    if (mobileNumberPattern.test(editdata.mobileNo)) {
       dispatch(useredit(id,{...editdata,dob:maindate})).then((res)=>{
       
                toast({description:"Edited  Successfully",status:"success","position":"top",duration:2000})

                dispatch(editsuccuess())
                onClose()
                handleupdate()
                navigate("/login")
            }).catch((err)=>{
                if(err.message=="Network Err"){
                    toast({description:"something going wrong please check",status:"error","position":"top",duration:2000})
                    dispatch(editfailure())
                }else{
                    toast({description:"Error to edit profile",status:"error","position":"top",duration:2000})
                    dispatch(editfailure())
                }
    
       })
           
    }else{
      toast({description:"Please Provide a valid Mobile No.",status:"error","position":"top",duration:2000}) 
    }
  }
    return (
      <>
        <Button colorScheme='green' onClick={onOpen}>
          Edit Details
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Edit
              </AlertDialogHeader>
            
              <AlertDialogBody>
            
               <FormControl isRequired >
                <FormLabel>First name</FormLabel>
                <Input  value={editdata.firstName} name="firstName" onChange={handlechange} placeholder='first name' />
              </FormControl>
  
              <FormControl mt={4} isRequired>
                <FormLabel>Last name</FormLabel>
                <Input  value={editdata.lastName}  onChange={handlechange} name="lastName" placeholder='last name' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>User Name</FormLabel>
                <Input  value={editdata.userName} onChange={handlechange} name="userName" placeholder='user name' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>EmailId</FormLabel>
                <Input  value={editdata.emailId}  onChange={handlechange} name="emailId" placeholder='email Id' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>MobileNo</FormLabel>
                <Input  value={editdata.mobileNo}  type="number" onChange={handlechange} name="mobileNo" placeholder='mobile no' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>D.O.B</FormLabel>
                <Input  value={editdata.dob} type="date"  onChange={handlechange} name="dob" placeholder='dob' />
              </FormControl>
              </AlertDialogBody>
            
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
             {isLoading?
               <Button colorScheme='green' ml={3}>
            Loading...
             </Button>:   <Button colorScheme='green' onClick={()=>handleedit(id)} ml={3}>
                  Delete
                </Button>}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }