import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './index.css';
import configureStore from './redux/configureStore';

import QuestionsLoader from './components/QuestionsLoader';
import QuestionList from './screens/QuestionList';
import QuestionDetail from './screens/QuestionDetail';
import CreateQuestion from './screens/CreateQuestion';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <QuestionsLoader>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={QuestionList} />
          <Route exact={true} path="/questions/create" component={CreateQuestion} />
          <Route exact={true} path="/questions/:questionId" component={QuestionDetail} />
        </Switch>
      </Router>
    </QuestionsLoader>
  </Provider>,
  document.getElementById('root')
);
