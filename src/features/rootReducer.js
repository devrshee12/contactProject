import { combineReducers } from "redux";
import contactReducer from "./contact/contactReducer";

const rootReducer = combineReducers({
    contact: contactReducer
})

export default rootReducer