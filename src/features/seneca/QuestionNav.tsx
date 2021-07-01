import {QuestionLink} from "./QuestionLink";
import {questions} from "./questions";

export function QuestionNav() {
  const questionLinks = questions.map((_, number) => <QuestionLink questionNumber={number} />)

  return (
    <nav>
      <ul>
        {questionLinks}
      </ul>
    </nav>
  )

}
