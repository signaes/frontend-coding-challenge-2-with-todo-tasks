import React from 'react';
import {shallow} from 'enzyme';

import Choices from './choices';

const choices = [
  {url: 'url1', choice: 'a', votes: '1'},
  {url: 'url2', choice: 'b', votes: '10'},
  {url: 'url3', choice: 'c', votes: '100'},
];

it('matches the snapshot', () => {
  const wrapper = shallow(<Choices choices={choices}></Choices>);
  expect(wrapper).toMatchSnapshot();
})
