import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    uname: "",
    email: "",
    pass: "",
    cpass: ""
  };
  handleStringChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = e => {
    e.preventDefault();
    const { uname, email, pass, cpass } = this.state;
  };
  render() {
    const { uname, email, pass, cpass } = this.state;

    return (
      <form className="form-signin" onSubmit={this.handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>

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
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleStringChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" className="sr-only">
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
        <div className="form-group">
          <label htmlFor="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword2"
            name="cpass"
            className="form-control"
            placeholder="Password"
            onChange={this.handleStringChange}
            value={cpass}
          />
        </div>
        <button className="btn btn-md btn-primary" type="submit">
          Register
        </button>

        <span className="mt-5 ml-2 mb-3 text-muted">
          Already have an account ? <Link to="/login">Login </Link>
        </span>
      </form>
    );
  }
}
