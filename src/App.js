import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  const[darkMode, setDarkMode] = useState('light');
  const toggleMode = ()=>{
    if(darkMode === 'dark'){
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled','success');
      document.title  = "TextUtils-Home";
      
    } else{
      setDarkMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled','danger');
      document.title  = "TextUtils-Dark Mode";
    }
  }
  
  // const toggleRed = ()=>{
  //  if(document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === 'dark' || document.body.style.backgroundColor === 'green'){
  //   document.body.style.backgroundColor = '#a30b0b';
  //  }else{
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }

  // const toggleGreen=()=>{
  //   if(document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === 'dark' || document.body.style.backgroundColor === 'red'){
  //     document.body.style.backgroundColor = '#023402';
  //    }else{
  //       document.body.style.backgroundColor = 'white';
  //     }
  // }
  return (
    <>
      <Navbar title="Harddy Reacts" aboutText="About Me" mode={darkMode}  toggleMode={toggleMode}/>
      {/* toggleGreen={toggleGreen} toggleRed={toggleRed} */}
      <Alert alert={alert} />
      <div className="container">
      <TextForm  showAlert={showAlert} heading="Enter the text here" mode={darkMode} />
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
