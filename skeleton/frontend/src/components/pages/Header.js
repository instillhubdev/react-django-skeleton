import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { doLogout } from "../../actions/auth";
class Header extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    doLogout: PropTypes.func.isRequired
  };
  render() {
    const { isAuthenticated, user } = this.props;
    const authLinks = (
      <React.Fragment>
        <li className="nav-item">
          <button onClick={this.props.doLogout} className="nav-link btn btn-info btn-sm text-light">
            Logout
          </button>
        </li>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </React.Fragment>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Django Skeleton
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});
const mapDispatchToProps = { doLogout };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
