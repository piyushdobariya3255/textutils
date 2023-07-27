import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,   //// react router dom search w3 school
  Switch,
  Route
} from "react-router-dom";



function App(props) {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  // const removeclass = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }


  const toggleMode = (cls) => {
    // removeclass()
    // document.body.classList.add('bg-'+ cls)
    
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode is enabe", "success")
      document.title = "Textutils - Dark mode"
      setInterval(()=>{
        document.title = "Textutils is Amazing mode"
      },2000)
      setInterval(()=>{
        document.title = "install Textutils now"
      },1500)
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabe", "success")
      document.title = "Textutils - light mode"
    }
  }
  return (
    <>
      <Router>

        <Navbar title="textutile" abouttext="about" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/About">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading='Textutils - Word counter ,character counter,remove extra spacis' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} id="fom" mode={mode} />

            </Route>
          </Switch>

          {/* <About/> */}
        </div>
      </Router>

    </>
  );
}

export default App;
