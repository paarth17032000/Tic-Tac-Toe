import React, { Component } from 'react'
import Board from './board'
import '../App.css'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xisNext:true,
            step: 0,
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.step];
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => {this.handleClick(i)}}
                        squares={current.squares}
                    />
                </div>    
            </div>
        )
    }
}
