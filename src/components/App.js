import React, { useState, useEffect } from 'react';
import {  Route, Switch, NavLink, Link } from 'react-router-dom';


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
        <div className="app-container"></div>
                  
    )
}