import './Seneca.css';
import {ToggleType} from "./senecaTypes";
import {Toggle} from "./Toggle";
import {QuestionNav} from "./QuestionNav";
import {useDispatch, useSelector} from 'react-redux';
import {getPercentageCorrect, getQuestion, getStatus, initialize, NOT_LOADED} from "./senecaSlice";


export function Seneca() {
    const dispatch = useDispatch();
    const status = useSelector(getStatus);
    const question = useSelector(getQuestion);
    const percetageCorrect = useSelector(getPercentageCorrect);

    const correctLevel = Math.floor(percetageCorrect*4)*25;
    const message = percetageCorrect === 1 ? 'Well done!' : '';

    if (status === NOT_LOADED) {
        dispatch(initialize());
        return (
          <div className="seneca">
            <main>Loading...</main>
          </div>
        );
    } else {
        const toggles = question.toggles
          .map((options: ToggleType, toggleNumber: number) => (
            <Toggle key={`toggle_${toggleNumber}`} options={options} toggleNumber={toggleNumber}/>
          ));
        return (
          <div className={`seneca correct-${correctLevel}`}>
            <QuestionNav />
            <main className="question-container">
                <h1>{question.title}</h1>
                {toggles}
                <div className="message">
                    {message}
                </div>
            </main>
          </div>
        );
    }
}
