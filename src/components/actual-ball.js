import React, {Component} from 'react';
import NextBall from "./next-ball";
import ResetBingo from "./reset-bingo";

class ActualBall extends Component {
  render() {
    return (
      <div className="row">
        <div
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            float: 'none'
          }}
          className="col-sm-12 col-md-4 col-lg-4"
        >
          <ResetBingo resetBalls={this.props.resetBalls} />
        </div>
        <div className="actual-ball
          col-sm-12
          col-md-4
          col-lg-4"
          style={{
            border: '1px solid',
            fontSize: '128px',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            float: 'none'
          }}
        >
          <span>{this.props.actualBall.letter}</span>
          <span>{this.props.actualBall.number}</span>
        </div>
        <div
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            float: 'none'
          }}
          className="col-sm-12 col-md-4 col-lg-4"
        >
          <NextBall pickBall={this.props.pickBall}/>
        </div>
      </div>
    );
  }
}

export default ActualBall;
