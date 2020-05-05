import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import QuestionSummary from '../components/QuestionSummary';

export class QuestionList extends PureComponent {
  render() {
    return (
      <>
        <h1>Questions</h1>
        <hr/>
        <div>
          {
            this.props.list.map((question) => (
              <QuestionSummary key={question.url} {...question}/>
            ))
          }
        </div>
        <hr/>
        <Link to="/questions/create">
          <button>Create Question</button>
        </Link>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.questions.list,
});

export default connect(mapStateToProps)(QuestionList);
