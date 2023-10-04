import './App.css';
import Eyeball from './components/Js/Eyeball';
import Home from './components/Js/Home';
import Journey from './components/Js/Journey/Journey';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App" id="home">
      <Router>
        <Routes>
          <Route path='/welcome' element={<Home/>} />
          <Route path='/' element={<Eyeball/>} />
          <Route path='/Journey' element={<Journey/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
