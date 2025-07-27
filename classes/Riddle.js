// imports
import { question } from "readline-sync";

export class Riddle {
    constructor(objectRiddle) {
        this._id = objectRiddle._id;
        this.type = objectRiddle.type;
        this.difficulty = objectRiddle.difficulty;
        this.name = objectRiddle.name;
        this.taskDescription = objectRiddle.taskDescription;
        this.correctAnswer = objectRiddle.correctAnswer;
    }

    // Ask the player this current riddle
    ask() {
        let endQuestion = false;

        while (!endQuestion) {
            this.displayQuestion();
            const answer = this.getAnswer();

            if (this.checkAnswer(answer)) {
                endQuestion = true;
                console.log(`Congratulations :)`);
            }
            else {
                console.log(`Try again :(`);
            }
        }
    }

    // Helpe func for ask func
    displayQuestion() {
        console.log(`Difficulty level: ${this.difficulty}\n${this.name}\n`);
        console.log(`${this.taskDescription}`);
    }

    // Return the type of the riddle (Regular, Multiple Choices...)
    getRidleType() {
        return this.type;
    }

    // Get answer from player
    getAnswer() {
        const answer = question(`Enter your answer: `);
        return answer.trim();
    }

    // Check if player answer is correct
    checkAnswer(answer) {
        let isCorrect = false;
        if (answer.toLowerCase() === this.correctAnswer.toLowerCase()) {
            isCorrect = true;
        }
        return isCorrect;
    }
}