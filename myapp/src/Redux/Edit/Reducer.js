import { editfail, editreq, editsucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case editreq:{
            return {...state,isLoading:true,isError:false}
        }
        case editsucc:{
            return {...state,isLoading:false,isError:false} 
        }
        case editfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{return state}
    }
}