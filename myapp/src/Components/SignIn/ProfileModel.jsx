import React, { useEffect, useState } from "react"
import { FormControl,FormLabel,Input,ModalFooter,Button,ModalCloseButton,ModalBody,ModalHeader,ModalContent,Modal,useDisclosure,ModalOverlay, Box, Text } from "@chakra-ui/react"
import DeleteDialoge from "./DeleteDiaload"
import Edit from "./Edit"
export default function ProfileModel({id,isOpen,onClose,userName,firstName,lastName,emailId,mobileNo,dob,handleupdate}) {

  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
    
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User's Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box border="1px solid gray" p={10}  >
              <Box
      maxW="md"
      m="auto"
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
      bgColor="white"
      color="gray.700"
      textAlign="left"
    >
      <Text fontSize="2xl" fontWeight="bold">
        User Information
      </Text>
      <Text>
        <strong>First Name:</strong> {firstName}
      </Text>
      <Text>
        <strong>Last Name:</strong> {lastName}
      </Text>
      <Text>
        <strong>Email:</strong> {emailId}
      </Text>
      <Text>
        <strong>Mobile Number:</strong> {mobileNo}
      </Text>
      <Text>
        <strong>Username:</strong> {userName}
      </Text>
      <Text>
        <strong>Date of Birth:</strong> {dob}
      </Text>
    </Box>
      
              </Box>
          
            </ModalBody>
  
            <ModalFooter>
              <Box display={"flex"} justifyContent={"space-evenly"}>
          <Box p={2}><Edit handleupdate={handleupdate} id={id} firstName={firstName}lastName={lastName} userName={userName} emailId={emailId} mobileNo={mobileNo} dob={dob}/></Box>  
          <Box  p={2}>  <DeleteDialoge id={id}/></Box>
             <Box  p={2}> <Button onClick={onClose}>Cancel</Button></Box></Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }