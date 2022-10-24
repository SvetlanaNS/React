import {combineReducers, createStore} from "redux";
import  {chatReducer} from "./chatReduser/chatReducer";
import {messageReducer} from "./messagesReducer/messagesReducer";



  
const reducer = combineReducers ({
    chats:chatReducer,
    messages: messageReducer
})


export const store = createStore(reducer)