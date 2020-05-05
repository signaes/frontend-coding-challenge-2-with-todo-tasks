import api from '../../api.js';

// Actions
const GET_SUCCESS  = 'questions/GET_SUCCESS';
const FETCHING  = 'questions/FETCHING';
const INCREMENT = 'questions/INCREMENT';

// Reducer
const initialState = {
  list: null,
  error: null,
  fetching: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case GET_SUCCESS:
      return {...state,
        list: action.questions,
        fetching: false
      };
    case INCREMENT:
      return {
        ...state,
        list: state.list.map(question => {
          const { votes, url } = action.payload

          if (url.indexOf(question.url) === -1) {
            return question;
          }

          return {
            ...question,
            choices: question.choices.map(currentChoice => {
              if (currentChoice.url !== url) {
                return currentChoice;
              }

              return {
                ...currentChoice,
                votes
              };
            }),
          }
        }),
        fetching: false
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
    dispatch({ type: FETCHING });

    api.choices.vote(url).then((response) => {
      const { data: { votes, url } } = response;

      dispatch({ type: INCREMENT, payload: { votes, url } });
    });
}
