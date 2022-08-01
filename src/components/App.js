import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react';
import Home from './Home';


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
        <>
        
            <Route exact path="/">
                <Home />
            </Route>
        
        </>
                  
    )
};

export default App;