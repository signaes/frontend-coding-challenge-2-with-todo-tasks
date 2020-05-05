import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export class QuestionSummary extends PureComponent {
  render() {
    const {question, choices, published_at, url} = this.props;
    return (
      <div className="question-summary">
        <h2><Link to={url}>{question}</Link></h2>
        <div><strong>Published at:</strong> {published_at}</div>
        <div><strong>Choices:</strong> {choices.length}</div>
      </div>
    )
  }
}

export default QuestionSummary;
