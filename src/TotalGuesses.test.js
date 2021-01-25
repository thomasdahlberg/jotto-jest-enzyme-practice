import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import TotalGuesses from './TotalGuesses';

const defaultProps = {
  guessedWords: [
    {guessedWord: 'train', letterMatchCount: 3}
  ]
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<TotalGuesses {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(TotalGuesses, defaultProps);
});

describe('renders', () => {
  let wrapper;
  let guessedWords = [
    {guessedWord: 'train', letterMatchCount: 3},
    {guessedWord: 'agile', letterMatchCount: 1},
    {guessedWord: 'party', letterMatchCount: 5},
  ];
  beforeEach(() => {
    wrapper = setup(({ guessedWords: guessedWords}));
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
  });
  test('renders "total guesses" section', () => {
    const guessedWordTotalNode = findByTestAttr(wrapper, 'total-guesses-sum');
    expect(guessedWordTotalNode.length).toBe(1);
  });
  test('correct total number of guessed words', () => {
    const guessedWordTotalNode = findByTestAttr(wrapper, 'total-guesses-sum');
    expect(guessedWordTotalNode.text()).toBe(String(guessedWords.length))
  });
});

