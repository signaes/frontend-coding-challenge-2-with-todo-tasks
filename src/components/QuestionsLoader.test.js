import React from 'react';
import QuestionsLoader from './QuestionsLoader';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<QuestionsLoader />', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      questions: {
        list: [
          {
            choices: [
              { choice: "Java", votes: 33, url: "/questions/19/choices/58" },
              { choice: "Ruby", votes: 18, url: "/questions/19/choices/57" }
            ],
            published_at: "2020-05-05T15:53:36.113431+00:00",
            question: "Favourite programming language?",
            url: "/questions/19",
          }
        ]
      }
    })
  });

  it('fetches the questions when mounted', () => {

  })

  it('displays a loading message when there are no questions', () => {

  })

  it('renders its children when the questions have been loaded', () => {
    const wrapper = mount(
      <Provider store={store}>
        <QuestionsLoader />
      </Provider>
    );
    // expect(wrapper).toMatchSnapshot();

    console.log(wrapper.find('.question-summary'))

    expect(wrapper.find('.question-summary').length).toEqual(1);
  })
})
