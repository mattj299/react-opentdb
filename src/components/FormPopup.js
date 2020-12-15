import React, { useEffect, useReducer, useState } from "react";
import organizedData from "../data/organizedData";

// useReducer state and dispatch function
const initialState = {
  category: "any-category",
  difficulty: "any-difficulty",
  questions: "10",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function FormPopup({ setDataset }) {
  const [categories, setCategories] = useState(null);
  const [apiResponseCode, setApiResponseCode] = useState(null);
  const [questionsPerCategory, setQuestionsPerCategory] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function categories() {
      const categoriesResponse = await fetch(
        "https://opentdb.com/api_category.php"
      );
      const categoriesJson = await categoriesResponse.json();
      const triviaCategories = categoriesJson.trivia_categories;

      setCategories(triviaCategories);
    }
    categories();
  }, []);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  // Submits the form and fetch's the questions that are going to be used for the quiz
  const submitForm = (e) => {
    e.preventDefault();
    async function fetchingDataset() {
      const difficulty =
        state.difficulty === "any-difficulty"
          ? ""
          : `&difficulty=${state.difficulty}`;
      const category =
        state.category === "any-category" ? "" : `&category=${state.category}`;

      // In case user types a decimal into the input
      const questionsRounded = Math.round(state.questions);
      const amountOfQuestions = questionsRounded <= 0 ? "10" : questionsRounded;

      const determineQuiz = await fetch(
        `https://opentdb.com/api.php?amount=${amountOfQuestions}${difficulty}${category}&type=multiple`
      );

      const quiz = await determineQuiz.json();
      // Dataset received from the fetch
      const data = quiz.results;
      // Number used to see if api call was succesful or error. Check documentation for possible responses.
      const responseCode = quiz.response_code;

      // If statement is true, retrieve the amount of questions in the category that was chosen to display to the user
      if (category !== "" && responseCode !== 0) {
        const categoryQuestions = await fetch(
          `https://opentdb.com/api_count.php?${category}`
        );
        const questionsInCategory = await categoryQuestions.json();
        const categoryQuestionCount =
          questionsInCategory.category_question_count;
        setQuestionsPerCategory({
          total: categoryQuestionCount.total_question_count,
          easy: categoryQuestionCount.total_easy_question_count,
          medium: categoryQuestionCount.total_medium_question_count,
          hard: categoryQuestionCount.total_hard_question_count,
        });
      }

      const newData = await organizedData(data, responseCode);
      if (responseCode !== 0) {
        setApiResponseCode(responseCode);
      } else {
        setDataset(newData.organizedData);
      }
    }
    fetchingDataset();
  };

  const { category, difficulty, questions } = state;

  if (categories === null) return <h1>Loading...</h1>;
  else if (apiResponseCode) {
    const { total, easy, medium, hard } = questionsPerCategory;
    return (
      <div className="container">
        <h1>There was a problem with retrieving the data.</h1>
        <br />
        <p>
          Potential Problems could be api is down or user asked too many
          questions for chosen category
        </p>
        <br />
        <p>There are a total of {total} questions in this category.</p>
        <br />
        <p>{easy} easy questions.</p>
        <br />
        <p>{medium} medium questions.</p>
        <br />
        <p>{hard} hard questions.</p>
        <br />
        <p>Please refresh the browser and try again.</p>
      </div>
    );
  }
  return (
    <div style={{ display: "flex" }} className="popup-container">
      <div className="container">
        <div className="popup">
          <div className="popup-header">Welcome To The Quiz</div>
          <div className="popup-content">
            <p>This is a quiz application built using ReactJS.</p>
            <p>Here you decide what your quiz will be about</p>
            <p>It will load question and answer pairs into the component.</p>
            <p>A maximum of 50 questions can be returned per quiz</p>
            <form className="quiz-form" onSubmit={submitForm}>
              <label className="form-question">
                Select number of questions:
              </label>
              <input
                className="form-input"
                type="number"
                name="questions"
                value={questions}
                onChange={onChange}
              />

              <label className="form-question">Select a category:</label>
              <select
                className="form-input"
                value={category}
                name="category"
                onChange={onChange}
              >
                <option key="0" value="any-category">
                  Any Category
                </option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>

              <label className="form-question">Select a difficulty:</label>
              <select
                className="form-input"
                value={difficulty}
                name="difficulty"
                onChange={onChange}
              >
                <option value="any-difficulty">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>

              <button className="button">Start the quiz</button>
            </form>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPopup;
