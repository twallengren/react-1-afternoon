import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {

        super();

        let initArray = [
            { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }
        ]

        this.state = {
            unFilteredArray: initArray,
            userInput: "",
            filteredArray: []
        }

    }

    changeInput = (event) => {

        this.setState({ userInput: event.target.value });

    }

    handleClick = () => {

        // Get unFiltered Array
        let unfilt = this.state.unFilteredArray;

        let filt = unfilt.filter(obj => {
            return obj[this.state.userInput]
        })

        this.setState({ filteredArray: filt })

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">

                <h4>
                    Filter Object
                </h4>

                <span className="puzzleText">

                    Original: {JSON.stringify(this.state.unFilteredArray)}

                </span>

                <input className="inputLine" onChange={this.changeInput} />

                <button className="confirmationButton" onClick={this.handleClick}>

                    Filter

                </button>

                <span className="resultsBox filterObjectRB">

                    Filtered: {JSON.stringify(this.state.filteredArray)}

                </span>

            </div>
        )
    }
}

export default FilterObject