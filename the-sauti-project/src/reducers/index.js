import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { registration } from "./regisReducer";
import { user } from "./userReducer";
import { messages } from "./messageReducer";


const rootReducer = combineReducers({
    authentication,
    registration,
    user,
    messages
});

export default rootReducer;