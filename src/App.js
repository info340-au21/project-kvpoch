import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
import {Filter} from './FilterPage';
import {LibInfo} from './LibraryInfo';
import {Review} from './Reviews';
import { useEffect, useState } from 'react';
import HOME_PAGE_LIB_CARDS from './data/homepage_cards.json';
import HEADER_INFO from './data/header.json';

function App() {
    const [homepageLibCards, setHomepageLibCards] = useState(null);
    let homepageLibCards = fetch('./data/homepage_cards.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            setHomepageLibCards(json);
            console.log('parsed json', json);
        })
        .catch(function(err) {
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
