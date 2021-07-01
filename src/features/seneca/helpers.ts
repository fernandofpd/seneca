import {QuestionsType, QuestionType} from "./senecaTypes";
import {questions} from "./questions";

export function shuffleN(n: number) {
  const newArray = [...Array(n).keys()];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function randomizeOptions(question: QuestionType) {
  const title = question.title;
  const correctOptions: number[] = [];

  const shuffledToggleIndices = shuffleN(question.toggles.length);
  const toggles = shuffledToggleIndices.map((toggleIdx) => {
    const toggle = question.toggles[toggleIdx];

    const shuffledOptionIndices = shuffleN(toggle.length);
    const options = shuffledOptionIndices.map((optionIdx) => toggle[optionIdx])

    const correctOption = options.findIndex((opt) => opt.isCorrect); // assuming a single correct option
    correctOptions.push(correctOption);

    return options;
  });

  const selectedOptions: number[] = [];
  question.toggles.forEach((toggle) => {
    selectedOptions.push(Math.floor(Math.random() * toggle.length));
  });

  return { title, toggles, correctOptions, selectedOptions }
}
