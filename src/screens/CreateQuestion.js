import React, { PureComponent } from 'react';

import Choices from '../components/Choices';

export class CreateQuestion extends PureComponent {
  state = {
    choices: [],
    newChoice: '',
  }

  addChoice = () => {
    const choices = this.state.choices;
    choices.push({
      choice: this.state.newChoice,
      url: '',
      votes: 0
    });

    this.setState({
      choices,
      newChoice: '',
    })
  }

  handleChangeChoice = ({ target: { value: newChoice } }) => {
    this.setState({ newChoice: newChoice });
  }

  render() {
    return (
      <>
        <h1>Create Question</h1>
        <hr/>
        <h2>Question: <input type="text"/></h2>
        <Choices choices={this.state.choices} totalVotes={0} />
        <label>New Choice:</label>
        <input
          type="text"
          value={this.state.newChoice}
          onChange={this.handleChangeChoice}
        />
        <button onClick={this.addChoice}>Add</button>
        <hr/>
        <button>Save Question</button>
      </>
    )
  }
}

export default CreateQuestion;
