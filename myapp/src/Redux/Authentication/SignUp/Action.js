import axios from "axios"
import { signupfail, signupfinally, signupreq, singupsucc } from "./ActionTypes"
import { api } from "../../Api"
import axiosWithAuth from "../../Axioswithauth/Axioswithauth"

export const signuprequest=()=>{
    return {type:signupreq}
}
export const signupsuccess=()=>{
    return {type:singupsucc}
}
export const signupfailure=()=>{
    return {type:signupfail}
}
export const setsingupfinally=()=>{
    return {type:signupfinally}
}

export const signup=(dispatch)=>{
    // console.log(obj)
    dispatch(signuprequest())
   return axiosWithAuth.get(`${api}/users`)
}