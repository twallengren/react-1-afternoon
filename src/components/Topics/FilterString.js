import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {

        super();

        this.state = {
            unFilteredArray: ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta"],
            filteredArray: [],
            userInput: ""
        }

    }

    changeInput = (event) => {

        this.setState({ userInput: event.target.value });

    }

    handleClick = () => {

        // Get current input string
        let inputString = this.state.userInput;

        // Set state of filtered array
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(str => {
                return (str.includes(inputString))
            })
        })

    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">

                <h4>
                    Filter String
                </h4>

                <span className="puzzleText">

                    Original: {JSON.stringify(this.state.unFilteredArray)}

                </span>

                <input className="inputLine" onChange={this.changeInput} />

                <button className="confirmationButton" onClick={this.handleClick}>

                    Filter

                </button>

                <span className="resultsBox filterStringRB">

                    Filtered Names: {JSON.stringify(this.state.filteredArray)}

                </span>

            </div>
        )
    }
}

export default FilterString