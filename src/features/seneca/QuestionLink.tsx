import {QuestionLinkProps} from "./senecaTypes";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentQuestion, changeQuestion} from "./senecaSlice";

export const QuestionLink = ({ questionNumber }: QuestionLinkProps) => {
  const currentQuestion = useSelector(getCurrentQuestion);
  const dispatch = useDispatch()

  return (
    <li>
      <a className={currentQuestion === questionNumber ? 'selected' : ''} onClick={() => dispatch(changeQuestion({ questionNumber }))}>
        Question {questionNumber + 1}
      </a>
    </li>
  )

};
