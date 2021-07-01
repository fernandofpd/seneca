import {QuestionsType} from "./senecaTypes";

export const questions: QuestionsType = [
  {
    title: "The animal cell contains",
    toggles: [
      [{
        label: "Cell wall",
        isCorrect: false
      }, {
        label: "Ribosomes",
        isCorrect: true
      }, {
        label: "Chloroplasm",
        isCorrect: true
      }],
      [{
        label: "Cytoplasm",
        isCorrect: false
      }, {
        label: "Chloroplasm",
        isCorrect: true
      }],
      [{
        label: "Partially permeable membrane",
        isCorrect: false
      }, {
        label: "Impermeable membrane",
        isCorrect: true
      }],
      [{
        label: "Cellulose",
        isCorrect: false
      }, {
        label: "Mitochondria",
        isCorrect: true
      }],
    ]
  },
  {
    title: "What are the ideal conditions inside an office?",
    toggles: [
      [{
        label: "good pay",
        isCorrect: true,
        }, {
        label: "bad pay",
        isCorrect: false,
      }],
      [{
        label: "lot of meetings",
        isCorrect: false,
        }, {
        label: "less meetings",
        isCorrect: true,
      }],
      [{
        label: "free coffee",
        isCorrect: true,
        }, {
        label: "expensive coffee",
        isCorrect: false,
      }],
      [{
        label: "bear in office",
        isCorrect: false,
        }, {
        label: "dog in office",
        isCorrect: true,
      }],
    ]
  },
  {
    title: "Which are the best sports people & teams?",
    toggles: [
      [{
        label: "Liverpool",
        isCorrect: false,
      }, {
        label: "Chelsea",
        isCorrect: false,
      }, {
        label: "Real Madrid",
        isCorrect: true,
      }],
      [{
        label: "Serena Williams",
        isCorrect: true,
      }, {
        label: "Naomi Osaka",
        isCorrect: false,
      }],
    ]
  }
];
