import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
 import React, {useState} from 'react';
 import Alert from './components/Alert';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      setInterval(()=>{
        document.title='TextUtils is Amazing mode';
      }, 2000);
      // setInterval(()=>{
      //   document.title='Install textutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (  
    <>  
    {/* <Router>  */}
   <Navbar title="FirstWeb" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   {/* <Navbar/> */}
   {/* <Navbar title="FirstWeb"/> */}
   <Alert alert={alert}/>
   <div className="container my-3">
   
   {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform heading="Enter the text here" showAlert={showAlert} mode={mode}/>} />
          
    </Routes>
         */}
         <Textform heading="Enter the text here" showAlert={showAlert} mode={mode}/>
   {/* <About/> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;


