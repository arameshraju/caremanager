import React, { Component } from "react";

class PatinetMaster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Patinet Master </h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td> Patinet Name</td>
                <td>
                  <input type="text" name="name" />
                </td>
              </tr>
              <tr>
                <td> MobileNo </td>
                <td>
                  <input type="text" name="MobileNo" />
                </td>
              </tr>
              <tr>
                <td> Village/Town </td>
                <td>
                  <input type="text" name="Village" />
                </td>
              </tr>
              <tr>
                <td> Reference </td>
                <td>
                  <input type="text" name="Reference" />
                </td>
              </tr>
              <tr>
                <td> OtherInfo </td>
                <td>
                  <input type="text" name="OtherInfo" />
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
            </tbody>
          </table>
        </form>
      </React.Fragment>
    );
  }
}
export default PatinetMaster;
