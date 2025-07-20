// imports
import { Riddle } from "./Riddle.js";

// Riddle with choosing answer
export class ChoiceRidle extends Riddle{
    constructor(objectRiddle, choices){
        super(objectRiddle);
        this.choices = choices;
    }

    // Display the riddle and the Possible answers 
    displayQuestion(){
        console.log(`Difficulty level: ${this.difficulty}\n${this.name}\n`);       
        console.log(`${this.taskDescription}`);

        const choices = this.choices;
        let choiceNum = 1;
        for (const choice of choices) {
            console.log(`${choiceNum}. ${choice}`);
            
            choiceNum++;
        }
    }
}

