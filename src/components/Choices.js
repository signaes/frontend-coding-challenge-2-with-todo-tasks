import React from 'react';

const Choices = ({
  onVote,
  choices,
  totalVotes,
  fetching
}) => (
  <table>
    <thead>
      <tr>
        <th>Choices</th>
        <th>Votes</th>
        <th>Percentage</th>
        {onVote &&
          <th></th>
        }
      </tr>
    </thead>
    <tbody>
      {choices.map(({choice, url, votes}) => {
        const percentage = totalVotes === 0 ? 0 : Math.round(votes / totalVotes * 100);
        return (
          <tr key={`${choice}-${url}`}>
            <td>{choice}</td>
            <td>{votes || 0}</td>
            <td>{percentage}%</td>
            {onVote &&
              <td>
                <button
                  disabled={fetching}
                  onClick={() => onVote(url)}>
                  Vote
                </button>
              </td>
            }
          </tr>
        )
      })}
    </tbody>
  </table>
);

export default Choices;
