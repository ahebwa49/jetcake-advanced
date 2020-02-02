import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

test('renders without crashing', () => {
  shallow(<App />);
});

test('App snapshot renders', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});