import './App.css';
import Address from './components/Address';
import Cartes from './components/Cartes';
import Name from './components/Name';
import Navbarr from './components/Navbarr';
import Photos from './components/Photos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className="app">
    <Navbarr/>
    <Photos/>
    <Name/>
    <Address/>
    <Cartes/>
   </div> 
  );
}

export default App;
