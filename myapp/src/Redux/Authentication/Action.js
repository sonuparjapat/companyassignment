import { api } from "../Api"
import { signinfail, signinreq, singinsucc } from "./ActionTypes"
import axios from "axios"
export const singinrequest=()=>{
    return {type:signinreq}
}
export const singinsuccess=()=>{
    return {type:singinsucc}
}
export const signinfailure=()=>{
    return {type:signinfail}
}

export const signin=(obj)=>(dispatch)=>{
    dispatch(singinrequest())
    const {email,password}=obj
    axios.get(`${api}/users`).then((res)=>{
        
    })
}