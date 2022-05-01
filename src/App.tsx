import React, { useEffect, useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 50;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(
    fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY),
    "quiz question"
  );
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  useEffect(() => {
    fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY).then((data) =>
      console.log(data)
    );
  }, []);

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
