import useFetchQuiz from './hooks/useFetchQuiz';
import Question from './components/Question';
import QuestionProvider from './context/QuestionProvider';
import './App.css';

function App() {
  const quiz = useFetchQuiz();

  if (!quiz.length) return <></>;

  return (
    <QuestionProvider>
      <Question quiz={quiz} />
    </QuestionProvider>
  );
}

export default App;
