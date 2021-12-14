import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
import {Filter} from './FilterPage';
import {LibInfo} from './LibraryInfo';
import {Review} from './Reviews';
import { useState } from 'react';

function App() {
    const [homepageLibCards, setHomepageLibCards] = useState(null);
    fetch('data/homepage_cards.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            setHomepageLibCards(json);
        })
        .catch(function(err) {
            // alert('parsing failed');
            console.log('parsing failed', err);
        });

    return <BrowserRouter>
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage cards={homepageLibCards} />} />
                <Route path="/lib_info" element={<LibInfo />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/review" element={<Review />} />
            </ Routes>
            <Footer />
        </div> 
    </BrowserRouter> 
  ;
}




export default App;
