import './App.css';
import Footer from './components/Js/Footer';
import Herosection from './components/Js/Herosection';
import Navbar from './components/Js/Navbar';
import Project from './components/Js/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
