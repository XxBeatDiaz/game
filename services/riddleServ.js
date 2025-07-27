// imports
import readline from "readline-sync";
import loadedRiddles from "./allRiddles.js"
import { showDiffcultiesMenu, showTypesMenu } from "../menus/showMenus.js";
import { getAllRiddles, getRiddlesByDifficulty, createRiddle } from "../API/riddleApi.js";
import { ChoiceRidle } from "../classes/ChoiceRidle.js";
import { Riddle } from "../classes/Riddle.js";

// Convert all obj riddles and load to an instances
export async function loadRiddles() {
    const allRiddles = await getAllRiddles();
    const loadedRiddles = allRiddles.map((r) => {
        if (r.type === "regular") {
            return new Riddle(r)
        } else if (r.type === "choices") {
            return new ChoiceRidle(r, r.choices)
        }
    });
    return loadedRiddles;
}

// Load one riddle
export function loadOneRiddle(riddle) {
    if (riddle.type === "regular") {
        return riddle = new Riddle(riddle)
    } else if (riddle.type === "choices") {
        return riddle = new ChoiceRidle(riddle, riddle.choices)
    }
}

// Load by difficulty level
export async function loadRiddlesByDifficulty(difficulty) {
    const riddlesByDifficulty = await getRiddlesByDifficulty(difficulty);
    const byDiffArr = riddlesByDifficulty.filter(r => r.difficulty === riddlesByDifficulty);
    return loadRiddles(byDiffArr);
}

// Add riddle to db
export async function addRiddle() {
    try {
        const newRiddle = askParamsForCreateRiddle();
        const response = await createRiddle(newRiddle);
        if (response.code === 1) {
            console.log("not");
            
            return false; 
        }
        console.log("yes");
        
        const loadedRiddle = loadOneRiddle(newRiddle);
        loadedRiddles.push(loadedRiddle);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Helper functions for adding riddle
function askParamsForCreateRiddle() {
    const obj = {};
    obj.type = chooseType();
    obj.difficulty = chooseDiffculty();
    obj.name = readline.question(`Enter name> `);
    obj.taskDescription = readline.question(`Enter task description> `);

    if (obj.type === "choices") {
        obj.choices = askChoices();
        obj.correctAnswer = readline.question(`Enter the num of the correct answer> `)
    } else {
        obj.correctAnswer = readline.question(`Enter correct answer> `);
    }

    return obj;
}

function chooseDiffculty() {
    while (true) {
        showDiffcultiesMenu();
        const difficulty = readline.question(`Choose diffculty> `);
        switch (difficulty) {
            case "1":
                return "easy";
            case "2":
                return "medium";
            case "3":
                return "hard";
            default:
                console.log('Not valid');
                console.clear();
        }
    }
}

function chooseType() {
    while (true) {
        showTypesMenu();
        const type = readline.question(`Choose type> `)
        switch (type) {
            case "1":
                return "regular";
            case "2":
                return "choices"
            default:
                console.log('Not valid');
                console.assert();
        }
    }
}

function askChoices() {
    const choices = [];
    for (let i = 0; i < 4; i++) {
        const choice = readline.question(`Enter choice num ${i + 1}> `)
        choices.push(choice);
    }
    return choices;
}