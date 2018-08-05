import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className={ 'square ' + (props.winningSquare? 'winning-square':'')} onClick={props.onClick}>
        {props.value}lines[i]
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key = {i}
        value={this.props.squares[i]}
        winningSquare={this.props.winningSquares.includes(i) }
        onClick={() => this.props.onClick(i)}
      />
    );  
  }

  render() {
    let rows = [];
        for (let i = 0; i < 3; i++) {
          let cols = [];
          for (let j = 0; i < 3; i++) {
            cols.push(this.renderSquare(i*3+j));
          }
          rows.push(cols);
        }

    return (
      <div>
        { [0, 3, 6].map((row)=> 
        <div className="board-row">
          { [0, 1, 2].map((col) => this.renderSquare(row+col))}
        </div>
        )}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: '',
      }],
      stepNumber: 0,
      xIsNext: true,
      reverseMoveList: false,
    }
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(history.length-1, squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext? 'X' : 'O';
    
    this.setState({
      history: history.concat([{
        squares: squares,
        move: '('+ Math.floor(i / 3) + ',' + i % 3 + ')'
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
  reverseMoveList() {
    this.setState({
      reverseMoveList: !this.state.reverseMoveList,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(this.state.stepNumber, current.squares);

    const moves = history.map((step, move) => {
      const attr = move === this.state.stepNumber ? {id: 'selected-move'} : {};
      const desc = move ?
        'Go to move #' + move:
        'Go to game start';
      return (
        <li key={move} >
          <button {...attr} onClick={() => this.jumpTo(move)}>{desc} {step.move}</button>
        </li>
      );
    });
    if (this.state.reverseMoveList) { moves.reverse()};

    let status;
    if (winner) {
      status = 'Winner: ' + winner.name;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            winningSquares={winner?winner.squares:[]}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.reverseMoveList()}>Reverse List</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(turnsTaken, squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if (turnsTaken === 9) {
    return { name: 'Draw', squares:[] };
  }
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { name: squares[a], squares:lines[i] };
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

