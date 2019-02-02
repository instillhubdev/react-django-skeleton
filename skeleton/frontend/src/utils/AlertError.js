import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AlertError extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, message, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.errorMessage.name) {
        alert.error(`Name : ${error.errorMessage.name.join()}`);
      }
      if (error.errorMessage.email) {
        alert.error(`Email : ${error.errorMessage.email.join()}`);
      }
      if (error.errorMessage.message) {
        alert.error(`Message : ${error.errorMessage.message.join()}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.playerDeleted) {
        alert.success(message.playerDeleted);
      }
      if (message.playerAdded) {
        alert.success(message.playerAdded);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages.message
});

export default connect(
  mapStateToProps,
  null
)(withAlert(AlertError));
