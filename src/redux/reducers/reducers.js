import { combineReducers } from "redux";
import { action1reducer } from "./action1reducer";
import { action2reducer } from "./action2reducer";

 const reducers = combineReducers({
    action1key:  action1reducer,
    action2key:  action2reducer,
})

export default reducers