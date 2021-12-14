import React from 'react';

export  function Navigation () {
    return(
        <header className="welcome">

        <h1>Welcome to UW Library Directory!</h1>
        <nav className="top-nav">
            <div className="top-nav-content">
                <a href="/">Home </a>
            </div>

            <div className="top-nav-content">
                <a href="/lib_info"> Library Info</a>
            </div>

            <div className="top-nav-content">
                <a href="/filter">Filter</a>
            </div>

            <div className="top-nav-content">
                <a href="/review">Reviews</a>
            </div>

        </nav>
    </header>
    )
}