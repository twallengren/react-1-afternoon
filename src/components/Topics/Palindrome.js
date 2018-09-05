import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {

        super();

        this.state = {
            palindrome: "",
            userInput: ""
        }

    }

    changeInput = (event) => {

        this.setState({ userInput: event.target.value });

    }

    handleClick = () => {

        // Create array based on user input
        let revString = this.state.userInput.split("").reverse().join("");

        if (revString === this.state.userInput) {
            this.setState({ palindrome: "true" })
        } else {
            this.setState({ palindrome: "false" })
        }

    }

    render() {
        return (
            <div className="puzzleBox palindromePB">

                <h4>
                    Palindrome
                </h4>

                <input className="inputLine" onChange={this.changeInput} />

                <button className="confirmationButton" onClick={this.handleClick}>
                    Check
                </button>

                <span className="resultsBox">

                    Palindrome: {this.state.palindrome}

                </span>

            </div>
        )
    }
}

export default Palindrome