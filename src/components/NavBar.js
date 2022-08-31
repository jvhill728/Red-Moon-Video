import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div id="navBar">
            <div id="RMNavBar" className="navText">
                Red Moon Video
            </div>
            <span className="navText">
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/register">Register</Link>
                </button>
                <button>
                    <Link to="/login">Login</Link>
                </button>
                <button>
                    <Link to="/videoclerk">Video Clerk</Link>
                </button>
                <button>
                    <Link to="/library">Video Library</Link>
                </button>
            </span>

        </div>
    )
}

export default NavBar;