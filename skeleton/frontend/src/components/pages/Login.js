import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  state = {
    uname: "",
    pass: ""
  };
  handleStringChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = e => {
    e.preventDefault();
    const { uname, pass } = this.state;
  };
  render() {
    const { uname, pass } = this.state;

    return (
      <form className="form-signin" onSubmit={this.handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>

        <div className="form-group">
          <label htmlFor="inputUsername">Username</label>
          <input
            type="text"
            id="inputUsername"
            name="uname"
            className="form-control"
            placeholder="Username"
            onChange={this.handleStringChange}
            value={uname}
          />
        </div>
        <div className="form-group">
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            name="pass"
            className="form-control"
            placeholder="Password"
            onChange={this.handleStringChange}
            value={pass}
          />
        </div>

        <button className="btn btn-md btn-primary" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-muted">
          Don't have a account ? <Link to="/register">Register </Link>
        </p>
      </form>
    );
  }
}
