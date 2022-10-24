import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingRedirect";

const ProtectedRoutes =({children})=>{
   const user =useSelector(state=>state.currentUser);
   if(!user) {
    return<LoadingToRedirect/>
   }
    return ( 
        <div>

        </div>
    );
};

export default ProtectedRoutes;