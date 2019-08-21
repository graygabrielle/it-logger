import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

import "material-design-icons/iconfont/material-icons.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //init materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <Logs />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
