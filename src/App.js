
// import './App.css';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';

function App(props) {
    let nav = props.nav;
    return <div>
        <HomePage />
        <Footer />
    </div> 
  ;
    
}




export default App;
