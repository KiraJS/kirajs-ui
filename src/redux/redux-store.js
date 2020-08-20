import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./user-reducer";
import thunkMiddleware from "redux-thunk";
import {adminPageReducer} from "./admin-page-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    user: userReducer,
    adminPage: adminPageReducer
});
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;