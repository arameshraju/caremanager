import React, { Component } from "react";
import TransData from "./../service/TransData";

class Prescribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: {}
    };
    this.transData = new TransData();
  }
  openAppointment = data => {
    console.log("Appointment " + data.name);
    this.setState({ appData: data });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Prescribe</h2>
        <div className="row">
          <table className="table">
            <thead>
              <td>Name</td>
              <td>doctor</td>
              <td>symptom</td>
              <td>Action</td>
            </thead>
            <tbody>
              {this.transData.SearchData().map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.docname}</td>
                  <td>{item.symptom}</td>
                  <td>
                    <button onClick={() => this.openAppointment(item)}>
                      Appointment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default Prescribe;
