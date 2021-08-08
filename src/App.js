import React from "react";

import "./App.css";
import UseReducerHook from "./components/All_Hooks/UseReducerHook";
import UseRefHook from "./components/All_Hooks/UseRefHook";
import UseEffectHook from "./components/All_Hooks/UseEffectHook";
import UseState from "./components/All_Hooks/UseState";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Login from "./pages/Login";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "./components/PrivateRoute";

const history = createBrowserHistory();

function App() {
  return (
    <div className="container">
      <div>React All Hook</div>
      <div>
        <h2>UseReducer Hook</h2>
        <UseReducerHook />
        <UseRefHook />
      </div>
      <div>
        <UseEffectHook />
        <UseState />
      </div>
      <div
        style={{
          width: "100%",
          margin: "20px 0px",
          border: "2px solid salmon",
        }}
      >
        <h2>This is React router section</h2>
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              {/* <Route path="/about">
                <About />
              </Route> */}
              <PrivateRoute path="/about">
                <About />
              </PrivateRoute>
              <Route exact path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
