import readline from "readline-sync";
import { showMainMenu, showRiddlesMenu, showModesMenu } from "./showMenus.js";
import { regularMode, easiestRiddles, mediumRiddles, hardestRiddles, runCoosenRiddle } from "../gameManager/modes.js";
import { addRiddle } from "../services/riddleServ.js";

export async function mainMenu() {
    let flag = true;
    while (flag) {
        showMainMenu();
        const choice = readline.question(`Choose option> `);

        switch (choice) {
            case "1":
                await regularMode();
                break;
            case "2":
                await riddlesMenu();
                break;
            case "3":
                await modesMenu();
                break;
            case "0":
                flag = false;
                break;
            default:
                console.clear();
                console.log("Not valid try again")
                break;
        }
    }
}

export async function riddlesMenu() {
    while (true) {
        const allRiddles = await showRiddlesMenu();
        const choosen = readline.question(`Choose option> `);
        if (choosen === "+") {
            await addRiddle()
        } else if (choosen === "0") {
            return;
        } else if (parseInt(choosen) >= 1 && parseInt(choosen) <= allRiddles.length) {
            await runCoosenRiddle(allRiddles[parseInt(choosen) - 1]._id);
        } else {
            console.log("Not valid try again");
        }
    }
}

export async function modesMenu() {
    let flag = true;
    while (flag) {
        showModesMenu();
        const modeChoosen = readline.question(`Coose option> `);
        switch (modeChoosen) {
            case "1":
                await regularMode();
                break;
            case "2":
                await easiestRiddles();
                break;
            case "3":
                await mediumRiddles();
                break;
            case "4":
                await hardestRiddles();
                break;
            case "0":
                flag = false;
                break;
            default:
                console.clear();
                console.log("Not valid try again");
                break;
        }
    }
}