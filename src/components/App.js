import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';


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


        <NavBar />


        
        </div>
                  
    )
};

export default App;