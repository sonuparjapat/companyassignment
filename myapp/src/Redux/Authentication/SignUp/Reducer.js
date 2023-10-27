import { signupfail, signupreq, singupsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case signupreq:{
            return {...state,isLoading:true,isError:false}
        }
        case singupsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case signupfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
    }