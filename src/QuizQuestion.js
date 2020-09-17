// const { Component } = require("react");

import React, { Component } from "react";

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
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;