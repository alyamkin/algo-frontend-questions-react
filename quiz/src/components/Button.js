import { useContext } from 'react';
import { QuestionDispatchContext } from '../context/QuestionProvider';

export default function Button({ text, disabled, eventType }) {
  const dispatch = useContext(QuestionDispatchContext);
  return (
    <button disabled={disabled} onClick={() => dispatch({ type: eventType })}>
      {text}
    </button>
  );
}
