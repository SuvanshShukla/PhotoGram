import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>This is the homepage</h1>
            <h1>This is also where the login will be</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/add">ADD A POST</Link>
                    </li>
                    <li>
                        <Link to="/gallery">GALLERY</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;