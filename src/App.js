import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import Main from "./components/main/main";

export function App() {

    return (
        <div>
            <Router>
        <Main />
        </Router>
        </div>
    )
}