import React, { Fragment } from "react";
import AddPlayer from "./AddPlayer";
import Players from "./Players";
const Dashboard = () => {
  return (
    <Fragment>
      <h1>This is the Dashboard component</h1>
      <AddPlayer />
      <Players />
    </Fragment>
  );
};

export default Dashboard;
