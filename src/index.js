import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./Provider/Provider";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
