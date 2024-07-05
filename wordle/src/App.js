import { useState, useEffect } from 'react';
import './App.css';
import getWordleWords from './utils/getWordleWords';

const MAX_GUESS = 6;
const MAX_CHARS = 5;

export default function App() {
  const [solution, setSolution] = useState(null);
  const [guesses, setGuesses] = useState(new Array(MAX_GUESS).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  useEffect(() => {
    getWordleWords().then((words) => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setSolution(words[randomIndex].toLowerCase());
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (guesses.includes(solution) || guesses[MAX_GUESS - 1] != null) return;

      if (key === 'Enter' && currentGuess.length === MAX_CHARS) {
        const cloneGuesses = [...guesses];
        cloneGuesses[currentGuessIndex] = currentGuess;
        setGuesses(cloneGuesses);
        setCurrentGuess('');
        setCurrentGuessIndex((prevIndex) => prevIndex + 1);
      }

      if (key === 'Backspace' && currentGuess.length !== 0) {
        setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
      }

      if (
        key.length === 1 &&
        key.match(/[a-z]/) &&
        currentGuess.length !== MAX_CHARS
      ) {
        setCurrentGuess((prevGuess) => prevGuess + key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [guesses, currentGuess, currentGuessIndex, solution]);

  if (solution == null) return null;

  return (
    <div className="board">
      {guesses.map((guess, lineIndex) => {
        const isFinal = currentGuessIndex > lineIndex;
        return (
          <GuessLine
            key={lineIndex}
            guess={(lineIndex === currentGuessIndex
              ? currentGuess
              : guess ?? ''
            )
              .padEnd(MAX_CHARS)
              .split('')}
            currentGuess={currentGuess}
            solution={solution}
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
      }

      if (solution.includes(char)) {
        classes += ' close';
      }

      classes += ' incorrect';
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
