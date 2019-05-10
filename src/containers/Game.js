import React, {Component} from 'react';
import GridBox from '../components/GridBox.js'
import Result from '../components/Result.js'
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: Array(9).fill(null),
      nextPlayerX: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    const grid = this.state.grid.slice();
    if (this.checkResult(grid) || grid[i]) {
      return;
    }
    grid[i] = this.switchPlayer()
    this.setState({grid, nextPlayerX: !this.state.nextPlayerX})
  }

  switchPlayer() {
    switch(this.state.nextPlayerX) {
      case true:
        return 'O';
        break;
      case false:
        return "X";
        break;
      default:
        return null;
    }
  }

  checkResult(array) {
    console.log(this.state.grid);
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
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      console.log(array[a], array[b], array[c]);
      if(array[a] && array[a] === array[b] && array[a] === array[c]) {
        return array[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.checkResult(this.state.grid)
    return (
      <div className= 'game'>
        <GridBox
        grid={this.state.grid}
        handleClick={this.handleClick}
        />
        <Result winner={winner} />
      </div>
    )
  }
}

export default Game;
