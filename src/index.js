import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MemoryRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div className="noselect">
      <App />
    </div>
  </Router>,

  document.getElementById("root")
);

//reportWebVitals(console.log)

reportWebVitals();
