import {createSlice} from '@reduxjs/toolkit';
import {RootState, SenecaState} from "./senecaTypes";
import {questions} from "./questions";
import {randomizeOptions} from "./helpers";

export const NOT_LOADED = 'not loaded';
export const LOADED = 'loaded';

const initialState: SenecaState = {
  question: {
    title: '',
    toggles: [],
  },
  status: NOT_LOADED,
  correctOptions: [],
  selectedOptions: [],
  currentQuestion: 0,
  percentageCorrect: 0,
};

export const senecaSlice = createSlice({
  name: 'seneca',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initialize: (state) => {
      const { title, toggles, correctOptions, selectedOptions } = randomizeOptions(questions[state.currentQuestion]);

      state.question = { title, toggles };
      state.correctOptions = correctOptions;
      state.selectedOptions = selectedOptions;
      state.status = LOADED;
    },
    selectOption: (state, action) => {
      const { toggleNumber, optionNumber } = action.payload;

      if (state.percentageCorrect !== 1) {
        state.selectedOptions[toggleNumber] = optionNumber;

        const numberOfCorrectAnswers = state.correctOptions
          .filter((option, optionNumber) => option === state.selectedOptions[optionNumber]).length;
        state.percentageCorrect = numberOfCorrectAnswers / state.selectedOptions.length;
      }
    },
    changeQuestion: (state, action) => {
      const { questionNumber } = action.payload;

      const { title, toggles, correctOptions, selectedOptions } = randomizeOptions(questions[questionNumber]);

      state.currentQuestion = questionNumber;
      state.question = { title, toggles };
      state.correctOptions = correctOptions;
      state.selectedOptions = selectedOptions;
      state.percentageCorrect = 0;
      state.status = LOADED;
    }
  },
});

export const { initialize, selectOption, changeQuestion } = senecaSlice.actions;

export const getStatus = (state: RootState) => state.seneca.status;
export const getQuestion = (state: RootState) => state.seneca.question;
export const getCurrentQuestion = (state: RootState) => state.seneca.currentQuestion;
export const getSelectedOptions = (state: RootState) => state.seneca.selectedOptions;
export const getPercentageCorrect = (state: RootState) => state.seneca.percentageCorrect;

export default senecaSlice.reducer;
