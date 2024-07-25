import { useContext } from 'react';
import { QuestionDispatchContext } from '../context/QuestionProvider';

export default function Answer({ answer, id, correctAnswer, selectedAnswer }) {
  const dispatch = useContext(QuestionDispatchContext);

  function getAnswerClasses(currentAnswer) {
    let className = 'answer';

    if (currentAnswer !== selectedAnswer) {
      return className;
    }

    return selectedAnswer === correctAnswer
      ? className + ' correct'
      : className + ' incorrect';
  }

  return (
    <h2
      className={getAnswerClasses(id)}
      onClick={() =>
        dispatch({
          type: 'selected-answer',
          answerId: id,
        })
      }
    >
      {answer}
    </h2>
  );
}
