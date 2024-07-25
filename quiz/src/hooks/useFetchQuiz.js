import { useEffect, useState } from 'react';
import getQuizData from '../data/quizData';

export default function useFetchQuiz() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    async function fetchQuiz() {
      const data = await getQuizData();
      setQuiz(data);
    }

    fetchQuiz();
  }, []);

  return quiz;
}
