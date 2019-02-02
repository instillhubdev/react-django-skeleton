import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import store from "../store";
import AlertError from "../utils/AlertError";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "../common/ProtectedRoute";
import { loadUser } from "../actions/auth";

//Options for React Alert
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <React.Fragment>
              <Header />
              <br />
              <br />
              <AlertError />
              <div className="container">
                <Switch>
                  <ProtectedRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </React.Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
