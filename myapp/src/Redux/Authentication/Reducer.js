import { signinfail, signinreq, singinsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}
export const reducer=(state=initialdata,action)=>{
const {type,payload}=action
switch(type){
    case signinreq:{
        return {...state,isLoading:true,isError:false}
    }
    case singinsucc:{
        return {...state,isLoading:false,isError:false}
    }
    case signinfail:{
        return {...state,isLoading:false,isError:true}
    }
    default:{
        return state
    }
}
}
