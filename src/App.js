import './App.css';
import React, {useState} from 'react'
import Heading from './Components/Heading';
import About from './Components/About';
import Technologies from './Components/Technologies/Technologies';
import Work from './Components/Work';
import Future from './Components/Future/Future';
import Contact from './Components/Contact';
import Music from './Components/Music'
import SwiftCode from './Components/SwiftCode'

function App() {
  const [showSwiftCode, setShowSwiftCode] = useState(false);
  return (
    <div className="App">
      <Heading />
      <About showSwiftCode = {showSwiftCode} setShowSwiftCode = {setShowSwiftCode} />
      {
        showSwiftCode && (<SwiftCode />)
      }
      <Music />
      <Technologies />
      <Work />
      <Future />
      <Contact />
    </div>
  );
}

export default App;