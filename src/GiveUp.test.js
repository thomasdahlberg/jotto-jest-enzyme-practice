import React from 'react';
import { findByTestAttr } from '../test/testUtils';
import { shallow } from 'enzyme';

import GiveUp from './GiveUp';

const setup = () => {
  return shallow(<GiveUp />);
}

describe('renders', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-give-up');
    expect(component.length).toBe(1);
  });
  test('renders `Give Up` button', () => {
    let wrapper = setup();
    const button = findByTestAttr(wrapper, 'give-up-button');
    expect(button.length).toBe(1);
  });

  describe('when `Give Up button clicked', () => {
    let wrapper = setup()
    let button = findByTestAttr(wrapper, 'give-up-button');
    beforeEach(() => {
      button.simulate('click', { preventDefault() {} });
    })
    test('renders secret word text', () => {
      
    });
    test('renders message text', () => {

    });
    test('renders `New Word` component', () => {
      
    })
  })
});