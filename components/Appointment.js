import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./../service/Doctor";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.doctor = new Doctor();

    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 offset-2">
            <table className="table">
              <thead>
                <tr>
                  <td> Patient Name </td> <td> Doctor </td> <td>Symptoms</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> {this.props.appData.name} </td>{" "}
                  <td>
                    <select>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <input type="text" name="symptom" />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            appointment {this.props.appData.name}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Appointment;
