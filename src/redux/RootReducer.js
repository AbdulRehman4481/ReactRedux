import { combineReducers } from "redux";
import  studentReducer  from './Reducers/studentReducer'
import  authReducer  from './Reducers/authReducer'


const rootReducer = combineReducers({
    studentReducer,
    authReducer
})

export default rootReducer;