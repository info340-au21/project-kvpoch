
// import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
import {Map} from './Map';
import {LibInfo} from './LibraryInfo';
import {Review} from './Reviews';
function App(props) {
    return <BrowserRouter>
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lib_info" element={<LibInfo />} />
                <Route path="/map" element={<Map />} />
                <Route path="/review" element={<Review />} />
            </ Routes>
            <Footer />
        </div> 
    </BrowserRouter> 
  ;
}




export default App;
