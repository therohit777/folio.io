import './App.css';
// import About from './components/Js/About';
import Footer from './components/Js/Footer';
import Herosection from './components/Js/Herosection';
import Navbar from './components/Js/Navbar';
// import Project from './components/Js/Project';
import Testimonials from './components/Js/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      {/* <About/> */}
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
