import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './components/App';
import {Provider} from "react-redux";
import {persist, store} from "./redux/initialStore";
import { PersistGate } from "redux-persist/integration/react";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store ={store}>
   <PersistGate persistor={persist}>
      <App/> 
   </PersistGate>
 </Provider>
);

