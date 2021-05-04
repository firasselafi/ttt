import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";

import Home from "./components/home.component";
import PatientHome from "./components/patient-home.component";
import DoctorHome from "./components/doctor-home.component";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Route path="/" exact component={Home} />
         <Route path="/patients" component={PatientHome} />
         <Route path="/doctors" component={DoctorHome} />
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);
