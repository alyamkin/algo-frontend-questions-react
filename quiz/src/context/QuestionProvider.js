import { createContext, useReducer } from 'react';

export const QuestionContext = createContext(null);
export const QuestionDispatchContext = createContext(null);

const initialQuestionState = {
  selectedQuestion: 0,
  selectedAnswers: [null],
};

function questionReducer(questionState, action) {
  switch (action.type) {
    case 'next-question': {
      return {
        ...questionState,
        selectedQuestion: questionState.selectedQuestion + 1,
        selectedAnswers: [...questionState.selectedAnswers, null],
      };
    }
    case 'prev-question': {
      return {
        ...questionState,
        selectedQuestion: questionState.selectedQuestion - 1,
      };
    }
    case 'selected-answer': {
      const index = questionState.selectedAnswers.indexOf(null);
      if (index === -1) {
        return questionState;
      } else {
        const nextAnswers = [...questionState.selectedAnswers];
        nextAnswers[index] = action.answerId;
        return { ...questionState, selectedAnswers: nextAnswers };
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function QuestionProvider({ children }) {
  const [questionState, dispatch] = useReducer(
    questionReducer,
    initialQuestionState
  );
  return (
    <QuestionContext.Provider value={questionState}>
      <QuestionDispatchContext.Provider value={dispatch}>
        {children}
      </QuestionDispatchContext.Provider>
    </QuestionContext.Provider>
  );
}
