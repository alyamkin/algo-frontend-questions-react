import { wordleWords } from '../data/wordleWords';

export default function getWordleWords() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordleWords);
    }, 1000);
  });
}
