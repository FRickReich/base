import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";

import { Home, NotFound } from "./containers/";

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </Router>,
    document.querySelector("#root")
);
