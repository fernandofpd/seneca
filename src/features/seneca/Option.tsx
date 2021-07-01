import {OptionProps} from "./senecaTypes";
import {selectOption} from "./senecaSlice";
import {useDispatch} from "react-redux";

export function Option({ option, toggleNumber, optionNumber, isSelected }: OptionProps): JSX.Element {
  const dispatch = useDispatch();

  const name = `toggle_${toggleNumber}`;
  const id = `${name}_option_${optionNumber}`;

  return (
    <>
      <input name={name}className={`option-${optionNumber + 1}`} type="radio" checked={isSelected} aria-labelledby={id}/>
      <label  id={id} className="option-label" onClick={() => dispatch(selectOption({ toggleNumber, optionNumber }))} >
        <span>{option.label}</span>
      </label>
    </>
  )
}
