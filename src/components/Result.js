import React from 'react';

const Result = (props) => {

  if(props.winner) {

    return (
      <div>
        <h2>{props.winner} is the winner!</h2>
        <form>
          <input type="submit" value='Next Game' />
        </form>
      </div>
    )
  } return null;
}

export default Result;
