import React, { Component } from 'react'
import Board from './board'

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
    handleClick(i){
        const history = this.state.history.slice(0,this.state.step+1);
        const current = history[history.length-1];
        // const squares = current.squares.slice();
        const squares = Array.from(current.squares);
        const winner = Winner(squares);
        if(winner || squares[i]){
            return;
        }
        // console.log(history,history.length);
        // console.log(current);
        // console.log(squares);
        // console.log(`-------------------------`);
        squares[i] = this.state.xisNext ? 'X' : 'O' ;
        this.setState({
            history: history.concat({
                squares: squares
            }),
            // history: {squares: squares},
            xisNext: !this.state.xisNext,
            step: history.length
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.step];
        const squares = Array.from(current.squares);
        const winner = Winner(squares);
        console.log(winner);
        // console.log(history,history.slice(0,this.state.step+1),history.length,current);
        return (
            <div className="game">
                <div className="game-board">
                    <div className="heading">~ Tic-Tac-Toe ~</div>
                    <Board onClick={(i) => {this.handleClick(i)}}
                        squares={current.squares}
                    />
                    <div className="winner">{winner}</div>
                </div>  
            </div>
        )
    }
}

function Winner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]; 
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if( squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
            return `${squares[a]} wins`;
    }
    return null;
}
