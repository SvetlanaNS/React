import {applyMiddleware, combineReducers, createStore} from "redux";
import  {chatReducer} from "./chatReduser/chatReducer";
import {messageReducer} from "./messagesReducer/messagesReducer";
import {createlogger} from "redux-logger/src";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}



const reducer = combineReducers ({
   chats:chatReducer,
  messages: messageReducer
})
  
const timer =store =>next =>action =>{
    const delay = action?.meta?.delay
    if(!delay) {
        return next(action)
    }
    const timeout=setTimeout(()=>next(action),delay) 
    return ()=> {
        clearTimeout(timeout)
    }
}


//const logger = createlogger( {
//    diff: true,
 //   predicate: true
//})
const persisterReducer = persistReducer(persistConfig, reducer)




export const store = createStore(persisterReducer,applyMiddleware(timer))
export const persist= persistStore (store)