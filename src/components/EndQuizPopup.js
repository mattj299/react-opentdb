import React from "react";

function EndQuizPopup({ restartQuiz, displayPopup, dataset, answeredCorrect }) {
  const displaying = displayPopup ? { display: "flex" } : { display: "none" };

  return (
    <div style={displaying} className="popup-container">
      <div className="container">
        <div className="popup end-popup">
          <div className="popup-header">Congratulations</div>
          <div className="popup-content">
            <p>You have completed the quiz</p>
            <p>
              {"You got: " +
                answeredCorrect +
                " out of " +
                dataset.length +
                " questions right."}
            </p>

            <button className="button" onClick={restartQuiz}>
              Restart
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndQuizPopup;
