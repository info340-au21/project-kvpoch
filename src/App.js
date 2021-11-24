
import React from 'react'; 
import {ReviewComments, ReviewForm} from '../src/Reviews.js';

/*For Map Page */
//import {Map, FilterBy} from '../src/Map.js';
//<div class="flex-container"><Map /><FilterBy /></div>    

function App() {
  return(
    
    <body>
    <header className="welcome">
        <h1>Welcome to UW Library Directory!</h1>
        <nav className="top-nav">
            <div className="top-nav-content">
                <a href="./index.html">Home</a>
            </div>
            <div className="top-nav-content">
                <a href="./lib_info.html"> Library Info</a>
            </div>
            <div className="top-nav-content">
                <a href="./map.html">Map</a>
            </div>
            <div className="top-nav-content">
                <a href="./review.html">Reviews</a>
            </div>

        </nav>
    </header>

    <main>
    <div class="review-flex-container"> <ReviewForm /> <ReviewComments /> </div>
    
    
   
    
    </main>
       
    <footer>
        <p>

            &copy; 2021
            Contact us:
            
        </p>
    </footer>
</body>
  )
}




export default App;
