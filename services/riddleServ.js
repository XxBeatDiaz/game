// imports
import readline from "readline-sync";
import { showDiffcultiesMenu, showTypesMenu } from "../menus/showMenus.js";
import { getAllRiddles, getRiddleById, getRiddlesByDifficulty, createRiddle } from "../API/riddleApi.js";
import { ChoiceRidle } from "../classes/ChoiceRidle.js";
import { Riddle } from "../classes/Riddle.js";

// Convert all obj riddles and load to an instances
export async function loadRiddles() {
    const allRiddles = await getAllRiddles();
    const loadedRiddles = allRiddles.map((r) => {
        if (r.type === "regular") {
            return new Riddle(r)
        }
        else if (r.type === "choices") {
            return new ChoiceRidle(r, r.choices)
        }
    });
    return loadedRiddles;
}

// Load one riddle
export async function loadOneRiddle(riddleId) {
    const toArr = [];
    const riddle = await getRiddleById(riddleId);
    toArr.push(riddle);
    return toArr;
}

// Load by difficulty level
export async function loadRiddlesByDifficulty(difficulty) {
    const riddlesByDifficulty = await getRiddlesByDifficulty(difficulty);
    const byDiffArr = riddlesByDifficulty.filter(r => r.difficulty === riddlesByDifficulty);
    return loadRiddles(byDiffArr);
}

// Add riddle to db
export async function addRiddle() {
    const newRiddle = askParamsForCreateRiddle();
    await createRiddle(newRiddle);
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
    showDiffcultiesMenu();
    const difficulty = readline.question(`Choose diffculty> `);
    while (true) {
        switch (difficulty) {
            case "1":
                return "easy";
            case "2":
                return "medium";
            case "3":
                return "hard";
            default:
                console.log('Not valid');
        }
    }
}

function chooseType() {
    showTypesMenu();
    const type = readline.question(`Choose type> `)
    switch (type) {
        case "1":
            return "regular";
        case "2":
            return "choices"
        default:
            break;
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