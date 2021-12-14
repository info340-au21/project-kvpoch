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
                        <div class="dropdown">
                            <button class="dropbtn">Library Info
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="/ArtsPage">Art Library</a>
                                <a href="/AllenPage">Allen Library</a>
                                <a href="/BuiltEnvirPage">Built Environment</a>
                                <a href="/EastAsiaPage">East Asia Library</a>
                                <a href="/EngineeringPage">Engineering Library</a>
                                <a href="/FosterBuisnessPage">Foster Buisness Library</a>
                                <a href="/SuzzaloPage">Suzzalo Library</a>
                                <a href="/OdegaardUnderPage">Odegaard Undergraduate Library</a>
                            </div>
                        </div>
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