import axios from "axios"
import { deletefail, deletereq, deletesucc } from "./ActionTypes"
import { api } from "../Api"
import axiosWithAuth from "../Axioswithauth/Axioswithauth"

export const deleterequest=()=>{
    return {type:deletereq}
}
export const deletesuccess=()=>{
    return {type:deletesucc}
}

export const deletefailure=()=>{
    return {type:deletefail}
}

export const deleteuser=(id)=>(dispatch)=>{
    dispatch(deleterequest())
    return axiosWithAuth.delete(`${api}/users/${id}`)
}