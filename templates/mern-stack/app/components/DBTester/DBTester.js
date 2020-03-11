import React, { Component } from "react";

export default class DBTester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    }

    componentDidMount() {
        const { url } = this.props;

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    status: json.success
                });
            });
    }

    statusOutput() {
        const { status } = this.state;

        return (
            <span className={status ? "label success" : "label error"}>
                {status ? "successful" : "failed"}
            </span>
        );
    }

    render() {
        return (
            <div className="DBTester">
                Database connection {this.statusOutput()}
            </div>
        );
    }
}
