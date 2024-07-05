import { useState, useEffect, useReducer } from 'react';
import './App.css';
import getWordleWords from './utils/getWordleWords';

const MAX_GUESS = 6;
const MAX_CHARS = 5;

function reducer(state, action) {
  const { guesses, currentGuess, currentGuessIndex } = state;
  const { type, value } = action;

  switch (type) {
    case 'initSolution':
      return { ...state, solution: value };
    case 'addToGuesses':
      const cloneGuesses = [...guesses];
      cloneGuesses[currentGuessIndex] = currentGuess;
      return {
        ...state,
        guesses: cloneGuesses,
        currentGuess: '',
        currentGuessIndex: currentGuessIndex + 1,
      };
    case 'removeFromCurrentGuess':
      return { ...state, currentGuess: currentGuess.slice(0, -1) };
    case 'addToCurrentGuess':
      return { ...state, currentGuess: currentGuess + value };
    default:
      throw new Error('Unknown action type');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    solution: null,
    guesses: new Array(MAX_GUESS).fill(null),
    currentGuess: '',
    currentGuessIndex: 0,
  });

  useEffect(() => {
    getWordleWords().then((words) => {
      const randomIndex = Math.floor(Math.random() * words.length);
      dispatch({
        type: 'initSolution',
        value: words[randomIndex].toLowerCase(),
      });
      console.log(words[randomIndex].toLowerCase());
    });
  }, []);

  useEffect(() => {
    const { solution, guesses, currentGuess } = state;

    const handleKeyDown = ({ key }) => {
      if (guesses.includes(solution) || guesses[MAX_GUESS - 1] != null) return;

      if (key === 'Enter' && currentGuess.length === MAX_CHARS) {
        dispatch({
          type: 'addToGuesses',
          value: null,
        });
      }

      if (key === 'Backspace' && currentGuess.length !== 0) {
        dispatch({
          type: 'removeFromCurrentGuess',
          value: null,
        });
      }

      if (
        key.length === 1 &&
        key.match(/[a-z]/) &&
        currentGuess.length !== MAX_CHARS
      ) {
        dispatch({
          type: 'addToCurrentGuess',
          value: key,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state]);

  if (state.solution == null) return null;

  return (
    <div className="board">
      {state.guesses.map((guess, lineIndex) => {
        const isFinal = state.currentGuessIndex > lineIndex;
        return (
          <GuessLine
            key={lineIndex}
            guess={(lineIndex === state.currentGuessIndex
              ? state.currentGuess
              : guess ?? ''
            )
              .padEnd(MAX_CHARS)
              .split('')}
            currentGuess={state.currentGuess}
            solution={state.solution}
            isFinal={isFinal}
            maxChars={MAX_CHARS}
          />
        );
      })}
    </div>
  );
}

function GuessLine({ guess, isFinal, solution }) {
  const getTileClass = (char, index) => {
    let classes = 'tile';
    if (isFinal) {
      if (solution[index] === char) {
        classes += ' correct';
      } else if (solution.includes(char)) {
        classes += ' close';
      } else {
        classes += ' incorrect';
      }
    }

    return classes;
  };

  return (
    <div className="line">
      {guess.map((char, colIndex) => (
        <div key={colIndex} className={getTileClass(char, colIndex)}>
          {char}
        </div>
      ))}
    </div>
  );
}
