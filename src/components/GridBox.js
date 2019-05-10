import React, {Component} from 'react';
import SquareBox from '../components/SquareBox.js'
import './GridBox.css'

class GridBox extends Component {

  constructor(props) {
    super(props)

    this.renderSquares = this.renderSquares.bind(this)
  }

  renderSquares() {
    const gameState = this.props.grid;
    return gameState.map((condition, index) => {
      return(
        <SquareBox
        value={condition}
        index={index}
        handleClick={this.props.handleClick}
        />
      )
    })
  }

  render() {
    return (
      <div className='board'>
        {this.renderSquares()}
      </div>
    )
  }
}

export default GridBox;
