import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { isLoggedIn, loggedInUsername } = props;

    return (
        <div id="navBar">
            <div id="RMNavBar" className="navText">
                Red Moon Video
            </div>

            <div id="siteLinks">
                {isLoggedIn ?
                    <span className="welcomeUser">{`Welcome, ${loggedInUsername}`}</span>
                    :
                    <span className="welcomeUser">Welcome Dear Guest!</span>
                }

                <Link to="/" className="navText">Home</Link>    
            </div>
        </div>
    )
}

export default NavBar;