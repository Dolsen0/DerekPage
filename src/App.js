import './App.css';
import Navibar from './components/Navbar.jsx'
import Photography from './pages/Photography';
import { Image } from 'react-bootstrap';
import Derek from './images/Derek.jpg'


function App() {

  const derekImage = <Image src = {Derek} thumbnail true/>

  return (
    <div className="App">
      <>
      <Navibar/>
      <h4>Page coming soon..</h4>
      <h5 className='software'>Software</h5>
      <h5 className='music'>Music</h5>
      <div className='photography'>  
      <Photography/>
      </div>
      
      </>
    </div>
  );
}

export default App;
