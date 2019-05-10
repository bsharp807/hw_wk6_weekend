import React, { Component } from 'react';
import './SquareBox.css'

class SquareBox extends Component {

  constructor (props) {
    super(props)

    this.changeSquareContent = this.changeSquareContent.bind(this)
  }

  changeSquareContent() {
    this.props.handleClick(this.props.index)
  }

  sortClass(i) {
    switch(i) {
      case 0:
        return 'top-row-1';
        break;
      case 1:
        return 'top-row-2';
        break;
      case 2:
        return 'top-row-3';
        break;
      case 3:
        return 'middle-row-1';
        break;
      case 4:
        return 'middle-row-2';
        break;
      case 5:
        return 'middle-row-3';
        break;
      case 6:
        return 'bottom-row-1';
        break;
      case 7:
        return 'bottom-row-2';
        break;
      case 8:
        return 'bottom-row-3';
        break;
    }
  }

  render() {
    return (
      <div className={this.sortClass(this.props.index)}>
      <button className="square" onClick={this.changeSquareContent}>
        {this.props.value}
      </button>
      </div>
    )
  }
}

export default SquareBox;
