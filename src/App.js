import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import CreatePatient from "./components/create-patient.component";
import Doctor from "./components/doctor.component";
function App() {

  return (

    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/create" exact component={CreatePatient}/>
        <Route path="/" exact component={Doctor}/>
      </div> 
    </Router>

    
  );
  

  
}

export default App;
