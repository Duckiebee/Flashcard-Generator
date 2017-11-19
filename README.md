# Flashcard-Generator

This application implements a basic flash card game where the user is prompted with a question and then shown the correct answer. The right and wrong answers are tallied up and the total is displayed at the end of the game.

The complete list of questions and answers for this application is inside the [questions.js](questions.js) file. The flash cards are constructed with the `ClozeCard` constructor defined in [flashCards.js](flashCards.js).

## Install

To install the application, first clone this repository:

	git clone https://github.com/Duckiebee/Friend-Finder.git
	
Then install the [inquirer](https://www.npmjs.com/package/inquirer) package for command line interaction.

	npm install inquirer

## Run

To run the game execute the following command:

	node flashCardApplication.js
