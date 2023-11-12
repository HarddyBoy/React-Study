import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Harddy Reacts" aboutText="About Me"/>
      <div className="container">
      <TextForm  heading="Enter the text here" />
      </div>
    </>
  );
}

export default App;
