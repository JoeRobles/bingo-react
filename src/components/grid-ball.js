import React, { Component } from 'react';

class GridBall extends Component {
  render() {
    return (
      <div className="row">
        <table className="table table-bordered col-sm-12 col-md-12 col-lg-12">
          <tbody>
          {this.props.balls.map((tr, index) => (
            <tr key={index}>
              <th>{this.props.letters[index]}</th>
              {
                tr.map(td => (
                  <td key={td}>{this.props.notInAlready(td)}</td>
                ))
              }
            </tr>
          ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default GridBall;
