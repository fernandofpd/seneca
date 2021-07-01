export type OptionType = {
  label: string;
  isCorrect: boolean;
}

export type ToggleType = OptionType[];

export type QuestionType = {
  title: string;
  toggles: ToggleType[];
}

export type QuestionsType = QuestionType[];

export type SenecaState = {
  question: QuestionType,
  status: string;
  correctOptions: number[];
  selectedOptions: number[];
  currentQuestion: number;
  percentageCorrect: number,
};

export type RootState = {
  seneca: SenecaState;
}

export type OptionProps = {
  option: OptionType;
  toggleNumber: number,
  optionNumber: number
  isSelected: boolean,
};

export type ToggleProps = {
  options: ToggleType;
  toggleNumber: number;
};

export type QuestionLinkProps = {
  questionNumber: number
}
