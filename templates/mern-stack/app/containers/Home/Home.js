"use strict";

import { withRouter, NavLink } from "react-router-dom";
import React, { Component } from "react";

import { DBTester, CounterView } from "./../../components/";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counters: []
        };
    }

    componentDidMount() {
        this.getAllCounters();
    }

    getAllCounters() {
        fetch("/api/counter/all")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        counters: data.counters
                    });
                } else {
                    console.log(data.message);
                }
            });
    }

    createCounter() {
        fetch("/api/counter/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                initialAmount: 0
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(this.state.counters);
                    this.getAllCounters();
                } else {
                    console.log(data.message);
                }
            });
    }

    render() {
        const { counters } = this.state;

        return (
            <div className="content">
                <h1>MERN-STACK</h1>
                <p>
                    A basic MERN Stack, utilizing MongoDB, Express.js, React.js
                    and Node.js - Docker-ized, backend written in TypeScript.
                </p>

                <h3>Database</h3>
                <DBTester url="/api/test/" />

                <h3>Counters</h3>

                {counters.length === 0 ? (
                    <p>No counters created yet...</p>
                ) : (
                    <div>
                        {counters.map((counter, i) => {
                            return (
                                <CounterView
                                    key={i}
                                    id={counter._id}
                                    onDelete={() => this.getAllCounters()}
                                />
                            );
                        })}
                    </div>
                )}

                <button onClick={this.createCounter.bind(this)}>
                    Create new Counter
                </button>

                <h3>Additional Features</h3>
                <a href="/error">404 Page</a>
            </div>
        );
    }
}

export default withRouter(Home);
