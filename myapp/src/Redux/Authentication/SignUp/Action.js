import axios from "axios"
import { signupfail, signupreq, singupsucc } from "./ActionTypes"
import { api } from "../../Api"

export const signuprequest=()=>{
    return {type:signupreq}
}
export const signupsuccess=()=>{
    return {type:singupsucc}
}
export const signupfailure=()=>{
    return {type:signupfail}
}

export const signup=(obj)=>async(dispatch)=>{
    console.log(obj)
    dispatch(signuprequest())

   const data=await axios.get(`${api}/users`)

   
  
    const isEmailInArray = data.data.some((element) => element.emailId === obj.emailId);
    console.log(isEmailInArray)
    if(!isEmailInArray){
        axios.post(`${api}/users`,obj)
        dispatch(signupsuccess())
    }else{
        dispatch(signupfailure())
    }
 
}