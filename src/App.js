import React, { useEffect } from "react";

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
      <i className="material-icons">face</i>
    </div>
  );
};

export default App;
