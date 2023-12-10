import './App.css';
import Hero from './Components/Home/Hero';
import Page2 from './Components/Home/Page2';
import Page3 from './Components/Home/Page3';
import Page4 from './Components/Home/Page4';
import WebObj from './Components/Home/WebObj';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <WebObj/>
        
        <Hero/>
        
        <Page2/>
        <Page3/>
        <Page4/>
    </div>
  );
}

export default App;
