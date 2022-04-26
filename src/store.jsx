import { createStore, combineReducers } from "redux";
import homepage from "./containers/Homepage/reducers";
import UserPage from "./containers/UserPage";

const reducers = combineReducers({ homepage, UserPage });

export default createStore(reducers);
