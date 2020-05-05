import React, {PureComponent} from 'react';

export class Choices extends PureComponent {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Choices</th>
            <th>Votes</th>
            <th>Percentage</th>
            {this.props.onVote &&
              <th></th>
            }
          </tr>
        </thead>
        <tbody>
          {this.props.choices.map(({choice, url, votes}) => {
            const percentage = Math.round(votes / this.props.totalVotes * 100);
            return (
              <tr key={url}>
                <td>{choice}</td>
                <td>{votes || 0}</td>
                <td>{percentage}%</td>
                {this.props.onVote &&
                  <td>
                    <button
                      disabled={this.props.fetching}
                      onClick={() => this.props.onVote(url)}>
                      Vote
                    </button>
                  </td>
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Choices;
