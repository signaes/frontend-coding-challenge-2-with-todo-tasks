import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {getQuestions} from '../redux/modules/questions';


export class QuestionsLoader extends PureComponent {
  componentDidMount () {
    console.log('componentDidMount');
    this.props.getQuestions();
  }

  render() {
    const {list, children} = this.props;

    if (!list) {
      return <h1>Loading questions ...</h1>
    }
    return children;

  }
}

const mapStateToProps = (state) => ({
  list: state.questions.list,
});

const mapDispatchToProps = {
  getQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsLoader);

