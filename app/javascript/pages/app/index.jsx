import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/app";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/app" component={App} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
