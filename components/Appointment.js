import React, { Component } from "react";
import { useParams } from "react-router-dom";
class Appointment extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 offset-2">
            appointment {this.props.appData.name}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Appointment;
