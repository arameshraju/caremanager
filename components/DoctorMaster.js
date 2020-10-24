import React, { Component } from "react";

class DoctorMaster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Doctor Master </h2>
        <form>
          <table>
            <tr>
              <td> Doctor Name</td>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
            <tr>
              <td> Qualification </td>
              <td>
                <input type="text" name="Qualification" />
              </td>
            </tr>
            <tr>
              <td> MobileNo </td>
              <td>
                <input type="text" name="MobileNo" />
              </td>
            </tr>
            <tr>
              <td> RegNo </td>
              <td>
                <input type="text" name="RegNo" />
              </td>
            </tr>
            <tr>
              <td> email </td>
              <td>
                <input type="text" name="email" />
              </td>
            </tr>
            <tr>
              <td> Address </td>
              <td>
                <input type="text" name="Address" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="Reset" value="Clear" />{" "}
              </td>
              <td>
                <input type="submit" value="Save" />
              </td>
            </tr>
          </table>
        </form>
      </React.Fragment>
    );
  }
}
export default DoctorMaster;
