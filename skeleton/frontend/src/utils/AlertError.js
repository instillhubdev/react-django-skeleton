import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AlertError extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.errorMessage.name) {
        alert.error(`Name : ${error.errorMessage.name.join()}`);
      }
      if (error.errorMessage.email) {
        alert.error(`Email : ${error.errorMessage.email.join()}`);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps)(withAlert(AlertError));