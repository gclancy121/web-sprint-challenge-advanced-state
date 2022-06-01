import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props.form)
  // console.log(props);
  const onSubmit = evt => {
   evt.preventDefault();
   const question = evt.target.newQuestion.value;
   const trueAnswer = evt.target.newTrueAnswer.value;
   const falseAnswer = evt.target.newFalseAnswer.value;
   props.postQuiz({question_text: question, true_answer_text: trueAnswer, false_answer_text: falseAnswer});
  }
 const isDisabled = () => {
   const button = document.getElementById("submitNewQuizBtn");
   const trimmedQuestion = props.form.newQuestion.trim(' ');
   const trimmedTrueAnswer = props.form.newTrueAnswer.trim(' ');
   const trimmedFalseAnswer = props.form.newFalseAnswer.trim(' ');

    if (trimmedQuestion.length > 0 && trimmedTrueAnswer.length > 0 && trimmedFalseAnswer.length > 0) {
      return button.disabled = false;
    } else {
      return button.disabled = true;
    }
 }
 useEffect(() => {
   isDisabled();
 }, [props.form])
 const onChange = evt => {
  const {id, value} = evt.target;
  props.inputChange(id, value);
  
}


 
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2 onClick={isDisabled}>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={props.form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={props.form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={props.form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={true} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
