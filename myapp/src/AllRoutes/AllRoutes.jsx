import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Components/SignIn/Signin'
import SignUp from '../Components/Signup/Signup'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    
    
    
    </>
  )
}
