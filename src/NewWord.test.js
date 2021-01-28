import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import NewWord from './NewWord';

const defaultProps = {
  success: false,
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<NewWord {...setupProps} />);
};

test('does not throw warning error with expected props', () => {
  checkProps(NewWord, defaultProps);
});

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-new-word');
  expect(component.length).toBe(1);
});

test('renders no button when `success` prop is false', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'new-word-button');
  expect(button.length).toBe(0);
});

test('renders new word button when `success` prop is true', () => {
  const wrapper = setup({success: true});
  const button = findByTestAttr(wrapper, 'new-word-button');
  expect(button.length).toBe(1);
});

