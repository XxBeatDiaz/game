import readline from "readline-sync";
import { showDiffcultiesMenu, showTypesMenu } from "../menus/showMenus.js";
import { createRiddle } from "../API/riddleApi.js";

export async function addRiddle() {
    const newRiddle = askParamsForCreateRiddle();
    createRiddle(newRiddle);
}

export function askParamsForCreateRiddle() {
    const obj = {};
    obj.id = readline.question(`Enter id> `);
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

// Helper functions
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