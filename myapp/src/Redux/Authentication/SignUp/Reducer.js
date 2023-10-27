import { signupfail, signupfinally, signupreq, singupsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    done:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case signupreq:{
            return {...state,isLoading:true,isError:false,done:false}
        }
        case singupsucc:{
            return {...state,isLoading:false,isError:false,done:true}
        }
        case signupfail:{
            return {...state,isLoading:false,isError:true,done:false}
        }
        case signupfinally:{
            return {...state,isLoading:false,isError:false,done:false}
        }
        default:{
            return state
        }
    }
    }