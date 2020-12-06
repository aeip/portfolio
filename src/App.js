import './App.css';
import Heading from './Components/Heading';
import About from './Components/About';
import Technologies from './Components/Technologies/Technologies';
import Work from './Components/Work';
import Future from './Components/Future/Future';
import Contact from './Components/Contact';
import Music from './Components/Music'

function App() {
  return (
    <div className="App">
      <Heading />
      <About />
      <Technologies />
      <Work />
      <Future />
      <Music />
      <Contact />
    </div>
  );
}

export default App;