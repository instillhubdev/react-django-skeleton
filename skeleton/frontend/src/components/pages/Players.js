import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPlayers, deletePlayer } from "../../actions/players";
class Players extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    console.log(this.props.players);
    return (
      <Fragment>
        <h2>Players</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.players.map(player => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.email}</td>
                <td>{player.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deletePlayer.bind(this, player.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { players } = state.players;
  return { players };
};
const mapDispatchToProps = { getPlayers, deletePlayer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
