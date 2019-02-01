import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
