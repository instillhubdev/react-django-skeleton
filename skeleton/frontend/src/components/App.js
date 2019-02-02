import React from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import store from "../store";
import AlertError from "../utils/AlertError";

//Options for React Alert
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <React.Fragment>
            <Header />
            <AlertError />
            <div className="container">
              <Dashboard />
            </div>
          </React.Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
