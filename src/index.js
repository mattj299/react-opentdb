import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormPopup from "./components/FormPopup";
import EndQuizPopup from "./components/EndQuizPopup";
import Question from "./components/Question";
import Answers from "./components/Answers";
import NextButton from "./components/NextButton";
import Footer from "./components/Footer";

function App() {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [displayNextButton, setDisplayNextButton] = useState(false);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [answeredCorrect, setAnsweredCorrect] = useState(0);
  const [dataset, setDataset] = useState(null);

  const restartQuiz = () => {
    window.location.reload(); // restart the application
  };

  const handleAnswerClick = (e) => {
    // Checks if answer is already chosen
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    if (rightClass || wrongClass) {
      return;
    }

    // handles answer clicked
    const item = e.target.closest("li");
    const value = item.value;
    const correctAnswer = dataset[currentDataIndex].answerUsingIndex;

    if (correctAnswer === value) {
      item.classList.add("right");

      setDisplayNextButton(!displayNextButton);
      setAnsweredCorrect(answeredCorrect + 1);
    } else {
      item.classList.add("wrong");
      // Displays the correct answer
      const list = document.querySelectorAll("li");
      const correct = list[correctAnswer];
      correct.classList.add("right");

      setDisplayNextButton(!displayNextButton);
    }
  };

  const handleNextButtonClick = () => {
    // removes class if an element contains that class, if no element contains that class then variable returns null
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    if (wrongClass !== null) wrongClass.classList.remove("wrong");
    if (rightClass !== null) rightClass.classList.remove("right");

    // handles next button click
    const dataIndexLength = dataset.length - 1;

    if (dataIndexLength === currentDataIndex) {
      setDisplayPopup(!displayPopup);
    } else {
      setDisplayNextButton(!displayNextButton);
      setCurrentDataIndex(currentDataIndex + 1);
    }
  };

  // If dataset is null then only display FormPopup so user can choose difficulty, etc of the quiz
  if (dataset === null)
    return (
      <>
        <div className="container no-footer-content">
          <FormPopup setDataset={setDataset} />
        </div>
        <Footer />
      </>
    );
  return (
    <>
      <div className="container no-footer-content">
        <EndQuizPopup
          restartQuiz={restartQuiz}
          displayPopup={displayPopup}
          dataset={dataset}
          answeredCorrect={answeredCorrect}
        />
        <Question dataset={dataset} currentDataIndex={currentDataIndex} />
        <Answers
          dataset={dataset}
          currentDataIndex={currentDataIndex}
          handleAnswerClick={handleAnswerClick}
        />
        <NextButton
          displayNextButton={displayNextButton}
          handleNextButtonClick={handleNextButtonClick}
          dataset={dataset}
          currentDataIndex={currentDataIndex}
        />
      </div>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
