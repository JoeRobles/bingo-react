import React, { Component } from 'react';
import ActualBall from './actual-ball';
import GridBall from './grid-ball';

class Bingo extends Component {
  letters = ['B', 'I', 'N', 'G', 'O'];

  numbersByLetter = 15;

  balls = [];

  bingoInit = {
    actualBall: { letter: '', number: '' },
    already: []
  };

  constructor(props) {
    super(props);
    let total = 1;
    for (let i = 1; i <= this.letters.length; i++) {
      let arr = [];
      let j = 1;
      for (;j <= this.numbersByLetter; j++) {
        arr.push(total);
        total++;
      }
      this.balls.push(arr);
    }
    let balls = [];
    for (let i = 1; i <= this.letters.length * this.numbersByLetter; i++) {
      balls.push(i);
    }
    this.bingoInit.balls = balls;

    const bingo = JSON.parse(localStorage.getItem('bingo'));

    if (typeof bingo === 'object' && bingo.balls !== []) {
      this.state = {
        actualBall: bingo.actualBall,
        already: bingo.already,
        balls: bingo.balls,
      };
    } else {
      localStorage.setItem('bingo', JSON.stringify(this.bingoInit));

      this.state = this.bingoInit;
    }

    this.pickBall = this.pickBall.bind(this);
    this.notInAlready = this.notInAlready.bind(this);
    this.setBalls = this.setBalls.bind(this);
    this.resetBalls = this.resetBalls.bind(this);
  }

  pickBall() {
    let actualBall = this.state.balls[Math.floor(Math.random() * this.state.balls.length)];
    let letter = this.setLetter(actualBall);
    let index = this.state.balls.indexOf(actualBall);
    if (index !== -1) {
      let balls = this.state.balls;
      balls.splice(index, 1);

      const bingo = {
        actualBall: { letter: letter, number: actualBall },
        already: this.state.already.concat(actualBall),
        balls: balls,
      };

      this.setBalls(bingo);
    }
  }

  setLetter(number) {
    return this.letters.find((letter, index) => {
      if (this.balls[index].indexOf(number) !== -1) {
        if (this.letters[index] !== undefined) {
          return this.letters[index];
        }
      }
    });
  }

  notInAlready(ball) {
    let print = '';
    if (this.state.already.indexOf(ball) !== -1) {
      print = ball;
    }

    return print;
  }

  setBalls(bingo) {
    localStorage.setItem('bingo', JSON.stringify(bingo));

    this.setState(() => ({
      actualBall: bingo.actualBall,
      already: bingo.already,
      balls: bingo.balls,
    }));
  }

  resetBalls() {
    let init = {
      actualBall: { letter: '', number: '' },
      already: [],
      balls: balls
    };
    localStorage.setItem('bingo', JSON.stringify(init));
    let balls = [];
    for (let i = 1; i <= this.letters.length * this.numbersByLetter; i++) {
      balls.push(i);
    }

    this.setState(() => ({
      actualBall: { letter: '', number: '' },
      already: [],
      balls: balls
    }));
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">BINGO</h3>
        <ActualBall
          pickBall={this.pickBall}
          actualBall={this.state.actualBall}
          resetBalls={this.resetBalls}
        />
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <GridBall
          notInAlready={this.notInAlready}
          already={this.state.already}
          balls={this.balls}
          letters={this.letters}
        />
      </div>
    );
  }
}

export default Bingo;
