
// import './App.css';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
function App(props) {
    let nav = props.nav;
    return <div>
      <Navigation />
        <HomePage />
        <Footer />
    </div> 
  ;
    
}




export default App;
