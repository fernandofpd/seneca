import { Option } from "./Option";
import { OptionType, ToggleProps } from "./senecaTypes";
import {useSelector} from "react-redux";
import {getSelectedOptions} from "./senecaSlice";

export function Toggle({ options, toggleNumber }: ToggleProps) {
  const selectedOptions = useSelector(getSelectedOptions);

  const selectedOption =  selectedOptions[toggleNumber];

  const toggleOptions = options
    .map((option: OptionType, optionNumber: number) => (
      <Option
        key={`toggle_${toggleNumber}_option_${optionNumber}`}
        option={option}
        toggleNumber={toggleNumber}
        optionNumber={optionNumber}
        isSelected={optionNumber === selectedOption}
      />));
  return (
    <div className={`toggle-container toggle-${options.length}`}>
      {toggleOptions}
      <div className="toggle-bubble" />
    </div>
  );
}
