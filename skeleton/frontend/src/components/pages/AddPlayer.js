import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPlayer } from "../../actions/players";
class AddPlayer extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const player = { name, email, message };
    this.props.addPlayer(player);
    this.setState({ name: "", email: "", message: "" });
  };
  handleStringChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Player</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleStringChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleStringChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              cols="75"
              rows="5"
              placeholder="Message"
              onChange={this.handleStringChange}
              value={this.state.message}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addPlayer };

export default connect(
  null,
  mapDispatchToProps
)(AddPlayer);
