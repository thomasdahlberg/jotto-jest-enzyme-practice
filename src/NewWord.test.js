import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import NewWord from './NewWord';

const defaultProps = {
  success: false,
};


test('does not throw warning error with expected props', () => {
  checkProps(NewWord, defaultProps);
});

describe('rendering', () => {
  let wrapper;
  const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<NewWord {...setupProps} />);
  };
  beforeEach(() => {
    wrapper = setup();
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-new-word');
    expect(component.length).toBe(1);
  });
  
  test('renders no button when `success` prop is false', () => {
    const button = findByTestAttr(wrapper, 'new-word-button');
    expect(button.length).toBe(0);
  });
  
  test('renders new word button when `success` prop is true', () => {
    wrapper = setup({success: true});
    const button = findByTestAttr(wrapper, 'new-word-button');
    expect(button.length).toBe(1);
  });
});

test('calls `resetAction` prop upon button click', () => {
  const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<NewWord {...setupProps} />);
  };
  const resetActionMock = jest.fn();
  const wrapper = setup({ success: true, resetAction: resetActionMock});
  const button = findByTestAttr(wrapper, 'new-word-button');
  button.simulate('click');
  expect(resetActionMock.mock.calls.length).toBe(1);
})



