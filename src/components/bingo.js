import React, {Component} from 'react';
import ActualBall from './actual-ball';
import GridBall from './grid-ball';

class Bingo extends Component {
  constructor(props) {
    super(props);
    this.letters = ['B','I','N','G','O'];

    this.state = {
      actualBall: {letter: '', number: ''},
      already: [],
      balls: [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
        16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
        46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
        61,62,63,64,65,66,67,68,69,70,71,72,73,74,75
      ]
    };
    this.pickBall = this.pickBall.bind(this);
    this.notInBalls = this.notInBalls.bind(this);
  }

  pickBall() {
    let actualBall = this.state.balls[Math.floor(Math.random() * this.state.balls.length)];
    let letter = this.setLetter(actualBall);
    let index = this.state.balls.indexOf(actualBall);
    let balls = this.state.balls;
    balls.splice(index, 1);

    this.setState({
      already: this.state.already.concat(actualBall),
      actualBall: {letter: letter, number: actualBall},
      balls: balls
    });
  }

  setLetter(number) {
    let letter = '';

    if (0 < number && number < 16) {
      letter = 'B';
    }
    if (15 < number && number < 31) {
      letter = 'I';
    }
    if (30 < number && number < 46) {
      letter = 'N';
    }
    if (45 < number && number < 61) {
      letter = 'G';
    }
    if (60 < number && number < 76) {
      letter = 'O';
    }

    return letter;
  }

  notInBalls(ball) {
    let print = '';
    if (this.state.balls.indexOf(ball) === -1) {
      print = ball;
    }

    return print;
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">BINGO</h3>
        <ActualBall pickBall={this.pickBall} actualBall={this.state.actualBall}/>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <GridBall notInBalls={this.notInBalls}/>
      </div>
    );
  }
}

export default Bingo;
