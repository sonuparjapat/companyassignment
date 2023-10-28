import React from "react"
import {useDisclosure, Button,AlertDialog,AlertDialogHeader,AlertDialogOverlay,AlertDialogBody,AlertDialogFooter,AlertDialogContent, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { deletefailure, deletesuccess, deleteuser } from "../../Redux/Delete/Action"
import { useNavigate } from "react-router-dom"
export default function DeleteDialoge({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
//   console.log(id)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const deletedata=useSelector((state)=>state.deleteuserreducer)
  const {isLoading,isError}=deletedata
  const toast=useToast()
  const handledelete=(id)=>{
dispatch(deleteuser(id)).then((res)=>{
dispatch(deletesuccess())
toast({description:"User Deleted Successfully",position:"top","status":"success","duration":2000})
onClose() 
navigate("/signup")
}).catch((err)=>{
    if(err.message=="Network Err"){
        dispatch(deletefailure())
        toast({description:"something going wrong please check",position:"top","status":"error","duration":2000}) 
       
    }else{
        dispatch(deletefailure())
        toast({description:"Facing Error in deleting of user",position:"top","status":"error","duration":2000})  
    }
})
  }
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Delete Customer
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete User
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
             {isLoading?
               <Button colorScheme='red' ml={3}>
            Loading...
             </Button>:   <Button colorScheme='red' onClick={()=>handledelete(id)} ml={3}>
                  Delete
                </Button>}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }