import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function DashBoard() {
  return (
    <React.Fragment>
      <h2>DashBoard</h2>
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
