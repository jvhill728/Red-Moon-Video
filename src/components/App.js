import React, { useState, useEffect } from 'react';
import {  Route, Switch, NavLink, Link } from 'react-router-dom';

//Beginning App below, navbar component needed

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    async function isValidJWT() {
        const token = localStorage.getItem('userToken');
        if(!token) setIsLoggedIn(false);

        else {
            setIsLoggedIn(true);
        }
    }

    useEffect(() => {
        isValidJWT();
    }, []);

    return (
        <div className="app-container">
            <div id="header">
                <span>
                    <h1 className="welcomeBanner">
                        Welcome to Red Moon Video!
                    </h1>
                </span>
            <div className="nav-bar"></div>



        </div> 
        </div>   
                  
    )
};

export default App;