import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[darkMode, setDarkMode] = useState('light');
  const toggleMode = ()=>{
    if(darkMode === 'dark'){
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
    } else{
      setDarkMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
      <Navbar title="Harddy Reacts" aboutText="About Me" mode={darkMode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm  heading="Enter the text here" mode={darkMode} />
      <About />
      </div>
    </>
  );
}

export default App;
