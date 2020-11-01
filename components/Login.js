import React, { Component } from "react";
import UserSvc from "./../service/UserSvc";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "demo.", password: "demo" };
    this.userSvc = new UserSvc();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.userSvc.Login({
      user: this.state.user,
      password: this.state.password
    });
    console.log(this.userSvc.getName());

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td> UserName</td>
                <td>
                  <input
                    type="text"
                    name="user"
                    value={this.state.user}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Password </td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="Reset" value="Clear" />{" "}
                </td>
                <td>
                  <input type="submit" value="login" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </React.Fragment>
    );
  }
}
export default Login;
