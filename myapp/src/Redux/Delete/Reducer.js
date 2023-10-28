import { deletefail, deletereq, deletesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,isLoading:true,isError:false}
        }
        case deletesucc:{
            return {...state,isLoading:false,isError:false} 
        }
        case deletefail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{return state}
    }
}