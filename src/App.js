import './App.css';
import Eyeball from './components/Js/Eyeball';
import Home from './components/Js/Home';
import Journey from './components/Js/Journey/Journey';
import Allprojects from './components/Js/Projects/Allprojects';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App" id="home">
      <Router>
        <Routes>
          <Route path='/' element={<Eyeball/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/Journey' element={<Journey/>}/>
          <Route path='/projects' element={<Allprojects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
