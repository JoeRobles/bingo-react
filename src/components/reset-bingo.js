import React, {Component} from 'react';

class ResetBingo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.resetBalls} className="btn btn-primary btn-lg">Reset</button>
      </div>
    );
  }
}

export default ResetBingo;
