import React from "react";
function Answers({ dataset, currentDataIndex, handleAnswerClick }) {
  return (
    <div className="answers clearfix">
      <ul>
        <li onClick={handleAnswerClick} className="answer-option" value={0}>
          <div className="answer-sidebar">A</div>
          <div className="answer-main">
            <p>{dataset[currentDataIndex].answers[0]}</p>
          </div>
        </li>
        <li
          onClick={handleAnswerClick}
          className="answer-option even-answer"
          value={1}
        >
          <div className="answer-sidebar">B</div>
          <div className="answer-main">
            <p>{dataset[currentDataIndex].answers[1]}</p>
          </div>
        </li>
        <li onClick={handleAnswerClick} className="answer-option" value={2}>
          <div className="answer-sidebar">C</div>
          <div className="answer-main">
            <p>{dataset[currentDataIndex].answers[2]}</p>
          </div>
        </li>
        <li
          onClick={handleAnswerClick}
          className="answer-option even-answer"
          value={3}
        >
          <div className="answer-sidebar">D</div>
          <div className="answer-main">
            <p>{dataset[currentDataIndex].answers[3]}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Answers;
