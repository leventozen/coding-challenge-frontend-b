import { combineReducers } from "redux";
import data from "./dataReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    data,
    apiCallsInProgress
});

export default rootReducer;
