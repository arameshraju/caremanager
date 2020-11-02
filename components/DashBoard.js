import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function DashBoard() {
  return (
    <React.Fragment>
      <h2>DashBoard</h2>
      <div className="row">
        <div className="col-3">
          <Link to="/PatientMaster">Patient</Link>
        </div>
        <div className="col-2">
          <Link to="/DoctorMaster">Doctor</Link>
        </div>
        <div className="col-3">
          <Link to="/Appointment">Appointment</Link>
        </div>
        <div className="col-2">
          <Link to="/Prescribe">Prescribe</Link>
        </div>
        <div className="col-2">
          <Link to="/Despatch">Despatch</Link>
        </div>
        <div className="col-sm-2">
          <Link to="/DaysReport">Reports</Link>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/PatientMaster">PatientMaster</Link>
        </li>
        <li>
          <Link to="/DoctorMaster">DoctorMaster</Link>
        </li>
        <li>
          <Link to="/Appointment">Appointment</Link>
        </li>
        <li>
          <Link to="/Prescribe">Prescribe</Link>
        </li>
        <li>
          <Link to="/Prescribe">Prescribe</Link>
        </li>
        <li>
          <Link to="/Despatch">Despatch</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default DashBoard;
