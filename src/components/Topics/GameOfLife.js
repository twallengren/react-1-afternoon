import React, { Component } from 'react';
import Canvas from '../Topics/GolCanvas';

class GameOfLife extends Component {

    constructor() {

        super();

        this.state = {
            status: 0
        }

    }

    handleClick = event => {

        const newstat = (this.state.status + 1) % 2;
        this.setState({ status: newstat });

    }

    statusTranslate() {

        if (this.state.status === 0) {
            return "PAUSED"
        } else {
            return "RUNNING"
        }

    }

    render() {
        return (
            <div className="puzzleBox gameoflifePB">

                <h4>
                    Conway's Game of Life
                </h4>

                <Canvas status={this.state.status} />

                <div>

                    Simulation Status: {this.statusTranslate()}

                </div>

                <button className="confirmationButton" onClick={this.handleClick}>

                    Start/Stop Simulation

                </button>

            </div>
        )
    }
}

export default GameOfLife