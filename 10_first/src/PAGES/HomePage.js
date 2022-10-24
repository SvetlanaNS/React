import React,{useState,useEffect} from 'react';
//import {useDispatch, useSelector} from "react-redux";
//import {logoutInitiate} from "../redux/action";
//import { useNavigate } from "react-router-dom";
import {db} from '../servises/firebase';
//import '../HomePage.css'

const HomePage = () => {
   /* const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }
*/
const[data,setData]=useState({});
 useEffect(()=>{
  db.child('contacts').on("value",(snaping)=>{
 if(snaping.val()!==null) {
   setData({...snaping.val()}) 
 }else{
    setData({})
 }
  })
  return()=> {
    setData({})
  }
 },[])


    return (
        <div style={{marginTop:"100px"}}>
            <table className={"styled-table"}>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>NO.</th>
                        <th style={{textAlign:"center"}}>Name.</th>
                        <th style={{textAlign:"center"}}>Email.</th>
                        <th style={{textAlign:"center"}}>Contact.</th>
                        <th style={{textAlign:"center"}}>Action.</th>
                    </tr>
              </thead>
              <tbody>
{Object.keys(data).map((id)=>{
return(
    <tr>
      <td>{data[id].name}</td>  
      <td>{data[id].email}</td> 
      <td>{data[id].contact}</td> 
    </tr>
)

}
)}
              </tbody>
            </table>
        </div>
    );
};

export default HomePage;