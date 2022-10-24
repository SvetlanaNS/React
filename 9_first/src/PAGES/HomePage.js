import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/action";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const user = useSelector(state => state.currentUser);
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

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleAuth}>Log Out</button>
        </div>
    );
};

export default HomePage;