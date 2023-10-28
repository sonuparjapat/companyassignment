import React from "react"
import { FormControl,FormLabel,Input,ModalFooter,Button,ModalCloseButton,ModalBody,ModalHeader,ModalContent,Modal,useDisclosure,ModalOverlay, Box, Text } from "@chakra-ui/react"
import DeleteDialoge from "./DeleteDiaload"
export default function ProfileModel({id,isOpen,onClose,userName,firstName,lastName,emailId,mobileNo,dob}) {
 
  
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
              {/* <FormControl isRequired >
                <FormLabel>First name</FormLabel>
                <Input isDisabled ref={initialRef} value={firstName} placeholder='first name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input isDisabled value={lastName} placeholder='last name' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>User Name</FormLabel>
                <Input isDisabled value={userName} placeholder='user name' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>EmailId</FormLabel>
                <Input isDisabled value={emailId} placeholder='email Id' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>MobileNo</FormLabel>
                <Input isDisabled value={mobileNo} placeholder='mobile no' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>D.O.B</FormLabel>
                <Input isDisabled value={dob} placeholder='dob' />
              </FormControl>
              */}
            </ModalBody>
  
            <ModalFooter>
            <DeleteDialoge id={id}/>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }