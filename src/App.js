
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
import {Filter} from './FilterPage';
import {LibInfo} from './LibraryInfo';
import {Review} from './Reviews';

function App(props) {
    return <BrowserRouter>
        <div>
            <Navigation nav = {props.HEADER_INFO} />
            <Routes>
                <Route path="/" element={<HomePage cards={props.HOME_PAGE_LIB_CARDS} />} />
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
