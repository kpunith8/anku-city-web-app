import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./main-page";
import "./i18n";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Suspense fallback={null}>
    <Router>
      <MainPage />
    </Router>
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
