import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({secretWord});
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
  test('`resetGame` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.resetGame;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
});

test('`getSecredWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }
  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();
  const getSecredWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecredWordCallCount).toBe(1);
});
