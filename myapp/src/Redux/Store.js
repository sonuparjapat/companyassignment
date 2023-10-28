

import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {reducer as signupreducer} from "./Authentication/SignUp/Reducer"
import {reducer as signinreducer} from "./Authentication/Reducer"
import {reducer as deleteuserreducer} from "./Delete/Reducer"
import {reducer as usereditreducer} from "./Edit/Reducer"
import thunk from "redux-thunk"
const rootreducer=combineReducers({signupreducer,signinreducer,deleteuserreducer,usereditreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))