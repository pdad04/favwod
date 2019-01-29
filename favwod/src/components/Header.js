import React from 'react';

const Header = props => (
    <header className="site-header">
        <h1>Favorite WOD Tracker</h1>
        <nav className="site-nav">
            <ul>
                <li>Sign In</li>
                <li><a href="/">Home</a></li>
                <li><a href="/addwod/amrap">AMRAP</a></li>
                <li><a href="/addwod/fortime">For Time</a></li>
            </ul>
        </nav>
    </header>
)

export default Header;