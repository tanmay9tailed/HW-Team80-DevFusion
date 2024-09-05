import React, { useState } from "react";
import Question from "./Question";

const Level = ({ data }) => {
  const { level, article, description, questions } = data;
  const [openQuiz, setOpenQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question

  const handleAnswerSelection = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const onSubmit = () => {
    const numSelectedAnswers = Object.keys(selectedAnswers).length;
    if (numSelectedAnswers === questions.length) {
      const correctAnswersCount = questions.reduce((count, question, index) => {
        return selectedAnswers[index] === question.correctAnswer ? count + 1 : count;
      }, 0);

      setScore(correctAnswersCount);
      setOpenQuiz(false);
    } else {
      alert("Complete your quiz!!!");
    }
  };

  const resetAnswers = () => {
    setSelectedAnswers({});
    setScore(null);
    setCurrentQuestionIndex(0); // Reset question index
  };

  return (
    <div className={`w-full bg-black relative pt-5 relative ${openQuiz ? "h-[205vh]" : "h-[130vh]"}  sm:h-screen sm:overflow-hidden`}>
      <img id="bg" src="/gamebg.jpeg" alt="levels bg" className="absolute top-0 z-0 opacity-25 object-cover" />
      <div className="m-10 mt-20 p-5 border border-gray-300/40 rounded-lg bg-white/30 shadow-md transition-all duration-500 min-h-96 text-white absolute">
        <h2 className="text-2xl font-bold mb-4">Level {level}</h2>
        <h3 className="text-xl font-semibold mb-3">{article}</h3>
        <div className="mb-6">
          <p className="mb-2">{description.para1}</p>
          <p>{description.para2}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setOpenQuiz(!openQuiz)}
          >
            {openQuiz ? "Close Quiz" : "Start Quiz"}
          </button>
        </div>

        {openQuiz && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white/30 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Quiz</h4>

            <Question
              questionNo={currentQuestionIndex}
              questionObj={questions[currentQuestionIndex]}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onAnswerSelect={(option) => handleAnswerSelection(currentQuestionIndex, option)}
            />

            <div className="flex justify-between mt-4">
              {currentQuestionIndex < questions.length - 1 ? (
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleNextQuestion}>
                  Next
                </button>
              ) : (
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={onSubmit}>
                  Submit
                </button>
              )}
              {currentQuestionIndex > 0 && (
                <button
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </button>
              )}
            </div>
          </div>
        )}

        {score !== null && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-100/30 shadow-md">
            <div>
              <h4 className="text-xl font-semibold mb-4">Your Score</h4>
              <p className="text-lg">
                You scored {score} out of {questions.length}
              </p>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-2" onClick={resetAnswers}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level;
