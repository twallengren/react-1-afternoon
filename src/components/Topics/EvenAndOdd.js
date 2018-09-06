import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor() {

        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    }

    changeInput = (event) => {

        this.setState({ userInput: event.target.value });

    }

    handleClick = () => {

        // Create array based on user input
        let inputArray = this.state.userInput.split(",")

        this.setState({
            evenArray: [...inputArray.filter(el => {
                return (el % 2 === 0)
            })]
        });

        this.setState({
            oddArray: [...inputArray.filter(el => {
                return (el % 2 === 1)
            })]
        });

    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">

                <h4>
                    Evens and Odds
                </h4>

                <input className="inputLine" onChange={this.changeInput} />

                <button className="confirmationButton" onClick={this.handleClick}>
                    Split
                </button>

                <span className="resultsBox">

                    Evens: [{this.state.evenArray.toString().trim()}]

                </span>

                <span className="resultsBox">

                    Odds: [{this.state.oddArray.toString().trim()}]

                </span>

            </div>
        )
    }
}

export default EvenAndOdd