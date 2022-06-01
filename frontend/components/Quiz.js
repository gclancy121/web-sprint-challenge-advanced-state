import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {

  const quiz = props.quiz;

  const selectAnswer = (evt) => {
    const id = evt.target.id;
    props.selectAnswer(id);
  }

  const submitAnswer = () => {
    const answer = (props.selectedAnswer);
    const id = (quiz.quiz_id);
    props.postAnswer(id, answer);
  }

  useEffect(() => {
    props.fetchQuiz();
  }, [])


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={props.selectedAnswer === quiz.answers[0].answer_id ? 'answer selected' : "answer"}>
              {quiz.answers[0].text}
                <button id={quiz.answers[0].answer_id} onClick={selectAnswer}>
                  {props.selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : "Select"}
                </button>
              </div>

              <div className={props.selectedAnswer === quiz.answers[1].answer_id ? 'answer selected' : "answer"}>
                {quiz.answers[1].text}
                <button id={quiz.answers[1].answer_id} onClick={selectAnswer}>
                {props.selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!props.selectedAnswer} onClick={submitAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)