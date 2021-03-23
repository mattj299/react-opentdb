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
    // useEffect runs this function which fetch's the api and sets the categories in categories state to be used when user decides what Q to have
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

  // Called every time user changes category, amount of questions, and difficulty
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  // Submits the form and fetch's the questions that are going to be used for the quiz, gets amount of questions, category, and difficulty user chose
  const submitForm = (e) => {
    e.preventDefault();
    async function fetchingDataset() {
      const difficulty =
        state.difficulty === "any-difficulty"
          ? ""
          : `&difficulty=${state.difficulty}`;
      const category =
        state.category === "any-category" ? "" : `&category=${state.category}`;

      // Declare early so later can be used in multiple scopes
      let questions, total, easy, medium, hard;

      // Only runs if a category is specified
      if (category) {
        // In case user types a decimal into the input or negative
        let questionsRounded = Math.round(state.questions);
        const forceAboveZero = questionsRounded <= 0 ? "10" : questionsRounded;
        questions = forceAboveZero;

        // Fetch categories and json them, then shorthand data
        const categoryQuestions = await fetch(
          `https://opentdb.com/api_count.php?${category}`
        );
        const categoryQJSON = await categoryQuestions.json();
        const categoryQuestionCount = categoryQJSON.category_question_count;

        // Set so it can be used in the switch/case
        total = categoryQuestionCount.total_question_count;
        easy = categoryQuestionCount.total_easy_question_count;
        medium = categoryQuestionCount.total_medium_question_count;
        hard = categoryQuestionCount.total_hard_question_count;

        // If user asks for too many questions it switches the amount asked for the max amount in the category and difficulty chosen by the user if specified
        // states difficulty is text and each posssibility is a case, code above is #'s in order to set the questions variable to #'s,
        // If user doesn't ask for too many questions, nothing happens, default is no difficulty specified
        switch (state.difficulty) {
          case "easy":
            if (questions > easy) {
              questions = easy;
            }
            break;
          case "medium":
            if (questions > medium) {
              questions = medium;
            }
            break;
          case "hard":
            if (questions > hard) {
              questions = hard;
            }
            break;
          default:
            if (questions > total) {
              questions = total;
            }
            break;
        }

        // Set the state so it can be used in a return to display # of questions in case api call fails
        setQuestionsPerCategory({
          total: categoryQuestionCount.total_question_count,
          easy: categoryQuestionCount.total_easy_question_count,
          medium: categoryQuestionCount.total_medium_question_count,
          hard: categoryQuestionCount.total_hard_question_count,
        });
      } else {
        // In case user types a decimal into the input or negative
        let questionsRounded = Math.round(state.questions);
        const forceAboveZero = questionsRounded <= 0 ? "10" : questionsRounded;
        questions = forceAboveZero;
      }

      // Fetch's data to determine the quiz
      const determineQuiz = await fetch(
        `https://opentdb.com/api.php?amount=${questions}${difficulty}${category}&type=multiple`
      );

      const quiz = await determineQuiz.json();
      // Dataset received from the fetch
      const data = quiz.results;
      // Number used to see if api call was succesful or error. Check documentation for possible responses.
      const responseCode = quiz.response_code;

      // Waits for organizedData which is a function, 2 arguments, shuffles questions, returns responseCode and shuffled answers with index of answer
      const newData = await organizedData(data, responseCode);
      // If error occurs, set state so it returns the correct error page
      if (responseCode !== 0) {
        setApiResponseCode(responseCode);
      }
      // Otherwise call setDataset which is a prop received from index.js to start the quiz
      else {
        setDataset(newData.organizedData);
      }
    }
    fetchingDataset();
  };

  const { category, difficulty, questions } = state;

  // When page opens and fetch is happening
  if (categories === null) return <h1>Loading...</h1>;
  // Happens when user asks for too many questions or api fails to retrieve categories and questions
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
        <p>
          The amount of questions displayed here could be wrong, if wanting max
          # of questions but doesn't work try lowering the number in your quiz.
        </p>
        <br />
        <p>
          Please click <a href="/">here</a> to refresh the browser and try
          again.
        </p>
      </div>
    );
  }

  // Returns when everything works
  return (
    <div style={{ display: "flex" }} className="popup-container">
      <div className="container">
        <div className="popup">
          <div className="popup-header">Welcome To The Quiz</div>
          <div className="popup-content">
            <p>This is a quiz application built using ReactJS.</p>
            <p>Here you decide what your quiz will be about</p>
            <p>It will load question and answer pairs into the component.</p>
            <p>A max of 50 questions can be returned per quiz</p>
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
                max="50"
                min="0"
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
