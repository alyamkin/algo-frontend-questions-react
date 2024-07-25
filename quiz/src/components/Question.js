import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionProvider';
import Button from './Button';
import Answer from './Answer';

export default function Question({ quiz }) {
  const { selectedQuestion, selectedAnswers } = useContext(QuestionContext);
  const { question, answers, correctAnswer } = quiz[selectedQuestion];

  const selectedAnswer = selectedAnswers[selectedQuestion];
  return (
    <>
      <h1>{question}</h1>
      {answers.map((answer, index) => (
        <Answer
          key={answer}
          id={index}
          answer={answer}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
        />
      ))}
      <Button
        text="Back"
        disabled={selectedQuestion === 0}
        eventType="prev-question"
      />
      <Button
        text="Next"
        disabled={
          selectedAnswer === null || selectedQuestion === quiz.length - 1
        }
        eventType="next-question"
      />
    </>
  );
}
