import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import routes from "./routes";
import { initial_state, reducer } from "./reducer";

import Navbar from "./components/navbar";

export const Store = React.createContext();

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initial_state);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Switch>
          {routes.map(({ component: Component, ...routeProps }, i) => (
            <Route
              key={routeProps.name + i}
              component={() => <Component store={Store} />}
              {...routeProps}
            />
          ))}
        </Switch>
      </Router>
    </Store.Provider>
  );
}
