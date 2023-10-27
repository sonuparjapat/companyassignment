import { api } from "../Api"
import axiosWithAuth from "../Axioswithauth/Axioswithauth"
import { signinfail, signinreq, singinsucc } from "./ActionTypes"
import axios from "axios"
export const singinrequest=()=>{
    return {type:signinreq}
}
export const singinsuccess=(payload)=>{
    return {type:singinsucc,payload}
}
export const signinfailure=()=>{
    return {type:signinfail}
}

export const signin=(dispatch)=>{
    dispatch(singinrequest())
    // const {email,password}=obj
  return  axiosWithAuth.get(`${api}/users`)
}