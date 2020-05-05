import api from '../../api.js';

// Actions
const GET_SUCCESS  = 'questions/GET_SUCCESS';

// Reducer
const initialState = {
  list: null,
  error: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_SUCCESS:
      return {...state,
        list: action.questions,
      };
    default: return state;
  }
}

// Action Creators
export const getQuestions = () => (dispatch) => {
    api.questions.get()
      .then(questions => dispatch({type: GET_SUCCESS, questions}));
}

export const vote = (url) => (dispatch) => {
    api.choices.vote(url)
      .then(() => dispatch(getQuestions()));
}
