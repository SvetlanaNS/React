import React from 'react';
import CustomLink from "./CustomLink";
import {Link,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import {logoutInitiate} from "../redux/action";
import '../style/Header.css'


const Header =()=>{
  const user=useSelector(state=>state.currentUser);
const dispatch =useDispatch();
const navigate = useNavigate();

const handleAuth =()=>{
    if(user) {
        dispatch(logoutInitiate())
    }
    setTimeout(()=>{
        navigate('login')
    },2000)
  
}



    return (
        <div className="header">
            <Link to={'/'} className={"logo"}>
                   <p className='logo'>
                       Contact app
                  </p>
          
         
            </Link>
            <div className="header-right">
               <CustomLink to={'/'}>Home</CustomLink>
               <CustomLink to={'/addContact'}>Add contact</CustomLink>
               <CustomLink to={'/about'}>About</CustomLink>
               <CustomLink to={'/register'}>Sing Up</CustomLink>
           {user ?(
            <p style={{cursor:'pointer'}} onClick={handleAuth}>
                Sing Out
            </p>
           ): (
            <CustomLink to={'/login'}>
                Sing in
            </CustomLink>
           )}

         
            </div>
        </div>
    );
};

export default Header;