import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import questions from './modules/questions';


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);

const reducer = combineReducers({
  questions,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
