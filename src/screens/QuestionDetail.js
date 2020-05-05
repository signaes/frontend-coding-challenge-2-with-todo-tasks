import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {vote} from '../redux/modules/questions';
import Choices from '../components/Choices';

export class QuestionDetail extends PureComponent {
  render() {
    const {question} = this.props;
    const totalVotes = question.choices.reduce((total, choice) => total + choice.votes, 0)
    return (
      <>
        <h1>Question Detail</h1>
        <hr/>
        <h2>{question.question}</h2>
        <Choices choices={question.choices} totalVotes={totalVotes} onVote={this.props.vote}/>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  question: state.questions.list.find(question => question.url.includes(ownProps.match.params.questionId)),
});

const mapDispatchToProps = {
  vote
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
