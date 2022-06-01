import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props);
  const onSubmit = evt => {
   evt.preventDefault();
   props.postQuiz({question_text: props.form.newQuestion, true_answer_text: props.form.newTrueAnswer, false_answer_text: props.form.newFalseAnswer});
  }

  const onChange = evt => {
    const {id, value} = evt.target;
    props.inputChange(id, value);
    
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
