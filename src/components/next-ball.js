import React, {Component} from 'react';

class NextBall extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.pickBall} className="btn btn-primary btn-lg">Next</button>
      </div>
    );
  }
}

export default NextBall;
