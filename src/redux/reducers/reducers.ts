import { combineReducers } from "redux";
import usersReducer from "./users-reducer";
import taxesReducers from "./taxes-reducers";

const reducers = combineReducers({
    userState: usersReducer,
    taxState: taxesReducers
});

export default reducers;