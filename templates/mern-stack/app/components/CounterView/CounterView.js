import React, { Component } from "react";

export default class CounterView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            id: "",
            amount: "",
            showDeleteMessage: false
        };
    }

    componentDidMount() {
        const { id } = this.props;

        this.getCounter(id);
    }

    callback() {
        this.props.onDelete();
    }

    getCounter(id) {
        fetch(`/api/counter/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        isLoading: false,
                        id: data.counter._id,
                        amount: data.counter.amount
                    });
                } else {
                    console.log(data.message);
                }
            });
    }

    deleteCounter() {
        const { id } = this.state;
        fetch(`/api/counter/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.callback();
                } else {
                    console.log(data.message);
                }
            });
    }

    handleCounter(increase) {
        const { id, amount } = this.state;

        fetch(`/api/counter/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: increase ? amount + 1 : amount - 1
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.getCounter(id);
                } else {
                    console.log(data.message);
                }
            });
    }

    increaseCounter() {
        this.handleCounter(true);
    }
    decreaseCounter() {
        this.handleCounter(false);
    }

    showDeleteCounterMessage() {
        this.setState({ showDeleteMessage: true });
    }

    render() {
        const { isLoading, amount, showDeleteMessage } = this.state;

        return (
            <div className="CounterView">
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    <span className="content">
                        <div>{amount}</div>
                        <button onClick={this.increaseCounter.bind(this)}>
                            +
                        </button>
                        <button onClick={this.decreaseCounter.bind(this)}>
                            -
                        </button>
                        <button
                            onClick={this.showDeleteCounterMessage.bind(this)}
                        >
                            Delete
                        </button>
                        {showDeleteMessage && (
                            <span className="deleteMessage">
                                Are you sure?{" "}
                                <button onClick={this.deleteCounter.bind(this)}>
                                    ✓
                                </button>
                            </span>
                        )}
                    </span>
                )}
            </div>
        );
    }
}
