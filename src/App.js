import {useState} from 'react'
import './App.css';
import NavigationBar from './Components/NavigationBar'
import { Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact'

function App() {
  const [currentNav, setCurrentNav] = useState("home");
  return (
    <div className="App">
        <NavigationBar currentNav = {currentNav} setCurrentNav = {setCurrentNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
