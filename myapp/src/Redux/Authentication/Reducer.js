import { signinfail, signinreq, singinsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    userdata:[]
}
export const reducer=(state=initialdata,action)=>{
const {type,payload}=action
switch(type){
    case signinreq:{
        return {...state,isLoading:true,isError:false,userdata:[]}
    }
    case singinsucc:{
        return {...state,isLoading:false,isError:false,userdata:payload}
    }
    case signinfail:{
        return {...state,isLoading:false,isError:true,userdata:[]}
    }
    default:{
        return state
    }
}
}
