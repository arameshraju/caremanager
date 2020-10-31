import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import PatientMaster from "./components/PatientMaster ";
import DoctorMaster from "./components/DoctorMaster ";
import Appointment from "./components/Appointment ";
import Prescribe from "./components/Prescribe ";
import DaysReport from "./components/DaysReport ";
import Despatch from "./components/Despatch ";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/DashBoard">DashBoard</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Support">Support</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Support">
            <Support />
          </Route>
          <Route path="/DashBoard">
            <DashBoard />
          </Route>
          <Route path="/PatientMaster">
            <PatientMaster />
          </Route>
          <Route path="/DoctorMaster">
            <DoctorMaster />
          </Route>
          <Route path="/Appointment">
            <Appointment />
          </Route>
          <Route path="/Prescribe">
            <Prescribe />
          </Route>
          <Route path="/Despatch">
            <Despatch />
          </Route>
          <Route path="/DaysReport">
            <DaysReport />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Support() {
  return (
    <div>
      <h2>Support</h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
