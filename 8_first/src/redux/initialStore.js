import {applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./postsReducer/postsReduser";


export const store = createStore(postsReducer,applyMiddleware (thunk ) )