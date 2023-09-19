import './App.css';
import Home from './components/Js/Home';
import Journey from './components/Js/Journey/Journey';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App" id="home">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Journey' element={<Journey/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
