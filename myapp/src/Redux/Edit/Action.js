import { api } from "../Api"
import axiosWithAuth from "../Axioswithauth/Axioswithauth"
import { editfail, editreq, editsucc } from "./ActionTypes"

export const editrequest=()=>{
    return {type:editreq}
}

export const editsuccuess=()=>{
    return {type:editsucc}
}
export const editfailure=()=>{
    return {type:editfail}
}
export const useredit=(id,obj)=>(dispatch)=>{
    dispatch(editrequest())
    return axiosWithAuth.patch(`${api}/users/${id}`,obj)
}