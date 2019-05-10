import React, {Component} from 'react';
import GridBox from '../components/GridBox.js'
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: Array(9).fill(null),
      nextPlayerX: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    const grid = this.state.grid.slice();
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

  render() {
    return (
      <div className= 'game'>
        <GridBox
        grid={this.state.grid}
        handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default Game;
