import React, { Component } from 'react';

class Sum extends Component {

    constructor() {

        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

    }

    changeInput = (event, id) => {

        if (id === 0) {
            this.setState({ number1: parseFloat(event.target.value) })
        } else if (id === 1) {
            this.setState({ number2: parseFloat(event.target.value) })
        }

    }

    handleClick = () => {

        this.setState({ sum: this.state.number1 + this.state.number2 })

    }

    render() {
        return (
            <div className="puzzleBox sumPB">

                <h4>
                    Sum
                </h4>

                <input className="inputLine" onChange={event => { this.changeInput(event, 0) }} />

                <input className="inputLine" onChange={event => { this.changeInput(event, 1) }} />

                <button className="confirmationButton" onClick={this.handleClick}>

                    Add

                </button>

                <span className="resultsBox">

                    Sum: {this.state.sum}

                </span>

            </div>
        )
    }
}

export default Sum