"use strict";

import { withRouter, NavLink } from "react-router-dom";
import React, { Component } from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="content">
                <h1>404</h1>
                <p>Page not found...</p>

                <p>
                    Go back{" "}
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </p>
            </div>
        );
    }
}

export default withRouter(NotFound);
