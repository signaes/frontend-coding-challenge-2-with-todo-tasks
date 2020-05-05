import React, {PureComponent} from 'react';

import Choices from '../components/Choices';

export class CreateQuestion extends PureComponent {
  state = {
    choices: [],
    newChoice: '',
  }

  addChoice = () => {
    const choices = this.state.choices;
    choices.push(this.state.newChoice);

    this.setState({
      choices,
      newChoice: '',
    })
  }

  render() {
    return (
      <>
        <h1>Create Question</h1>
        <hr/>
        <h2>Question: <input type="text"/></h2>
        <Choices choices={this.state.choices}/>
        <label>New Choice:</label>
        <input type="text" value={this.state.newChoice} onChange={event => this.setState({newChoice: event.target.value})}/>
        <button onClick={this.addChoice}>Add</button>
        <hr/>
        <button>Save Question</button>
      </>
    )
  }
}

export default CreateQuestion;
