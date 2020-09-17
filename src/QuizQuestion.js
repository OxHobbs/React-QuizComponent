// const { Component } = require("react");

import React, { Component } from "react";
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <main>
        <section>
          <p>
            {/* instruction text here */}
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {/* Buttons go here */}
            <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} />
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;