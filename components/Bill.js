import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./../service/Doctor";
import TransData from "./../service/TransData";

class Bill extends Component {
  constructor(props) {
    super(props);
    this.doctor = new Doctor();
    this.transData = new TransData();

    this.state = {
      diagnos: "",
      prescription: "",
      fee: "",
      treatment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(this.props);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    this.tdata = {
      transId: this.props.appData.transId,
      transDate: this.props.appData.transDate,
      pid: this.props.appData.pid,
      name: this.props.appData.name,
      did: "",
      docname: this.props.appData.docname,
      symptom: this.props.appData.symptom,
      diagnos: this.state.diagnos,
      prescription: this.state.prescription,
      fee: this.state.Symptoms,
      medicine: this.state.treatment,
      total: 0,
      despatch: "N",
      paid: "N",
      status: "P"
    };
    // console.log(this.tdata);
    this.transData.updateTrans(this.tdata);
    // console.log("Submit" + JSON.stringify(this.state));
    this.tdata = {};

    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 offset-2">
            <table className="table">
              <tbody>
                <tr>
                  <td> Patient</td>
                  <td> {this.props.appData.name} </td>
                </tr>
                <tr>
                  <td> Doctor</td>
                  <td> {this.props.appData.docname} </td>
                </tr>
                <tr>
                  <td> Symptoms</td>
                  <td> {this.props.appData.symptom} </td>
                </tr>
                <tr>
                  <td> Diagnos</td>
                  <td>{this.props.appData.diagnos}</td>
                </tr>
                <tr>
                  <td> Prescription</td>
                  <td>{this.props.appData.prescription}</td>
                </tr>
                <tr>
                  <td> Fee</td>
                  <td>{this.props.appData.fee}</td>
                </tr>
                <tr>
                  <td> Treatment</td>
                  <td>{this.props.appData.medicine}</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="submit"
                      value="Print"
                      onClick={this.handleSubmit}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Bill;
