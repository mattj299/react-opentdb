import React from "react";

function Question({ dataset, currentDataIndex }) {
  return (
    <div className="question">
      <h2>
        Question {currentDataIndex + 1}/{dataset.length}
      </h2>
      <br />
      <p className="question-element">{dataset[currentDataIndex].question}</p>
    </div>
  );
}

export default Question;
