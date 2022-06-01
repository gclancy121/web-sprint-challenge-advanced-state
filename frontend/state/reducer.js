// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from "./action-types"

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  return state
}

// 

const initialQuizState = {quiz: {question: 'do you love me', answers: [{answer_id: '1', text: "yes", correct: true}, {answer_id: '2', text: "no", correct: false}], quiz_id: "EMFH6"}}
function quiz(quizState = initialQuizState, action) {
  switch(action.type) {
   case types.SET_QUIZ_INTO_STATE: {
     const quiz = action.payload;
     return {...quizState, quiz}
   } 
   default:
    return quizState;
  }
  
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(formState = initialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { id, value } = action.payload;
      return {...formState, [id]: value}
    }
    default:
      return formState
  }
  
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form, })
