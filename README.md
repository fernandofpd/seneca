# Seneca Question and Toggle Task

* Questions are stored in `/src/app/features/senca/questions.ts`.
* Questions must have a `title` and some `toggles`.
* Toggles have a number of `options`.
* Options have a `label` and a boolean value `isCorrect` indicating that the question is correct.
* Assume only one correct option per toggle.
* Toggle order, option order and initial selection are randomize when changing questions.
* Level of correctness is indicated by background color.
* One question has been answered correctly the toggles become inactive.
