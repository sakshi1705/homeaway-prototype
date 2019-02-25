import {combineReducers} from 'redux' ;
import {reducer as formreducer} from "redux-form"
import authReducer from "./reducer_auth"
const RootReducer=combineReducers({
    auth : authReducer,
    form:formreducer
})

export default RootReducer;
