import readline from "readline-sync";
import { showMainMenu, showRiddlesMenu, showModesMenu } from "./showMenus.js";
import { regularMode, easiestRiddles, mediumRiddles, hardestRiddles, runCoosenRiddle } from "../gameManager/modes.js";
import { addRiddle } from "../services/riddleServ.js";

export async function mainMenu(player) {
    let flag = true;
    while (flag) {
        showMainMenu();
        const choice = readline.question(`Choose option> `);

        switch (choice) {
            case "1":
                await regularMode(player);
                break;
            case "2":
                await riddlesMenu(player);
                break;
            case "3":
                await modesMenu(player);
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

export async function riddlesMenu(player) {
    while (true) {
        const allRiddles = await showRiddlesMenu();
        const choosen = readline.question(`Choose option> `);
        if (choosen === "+") {
            await addRiddle()
        } else if (choosen === "0") {
            return;
        } else if (parseInt(choosen) >= 1 && parseInt(choosen) <= allRiddles.length) {
            await runCoosenRiddle(allRiddles[parseInt(choosen) - 1]._id, player);
        } else {
            console.log("Not valid try again");
        }
    }
}

export async function modesMenu(player) {
    let flag = true;
    while (flag) {
        showModesMenu();
        const modeChoosen = readline.question(`Coose option> `);
        switch (modeChoosen) {
            case "1":
                await regularMode(player);
                break;
            case "2":
                await easiestRiddles(player);
                break;
            case "3":
                await mediumRiddles(player);
                break;
            case "4":
                await hardestRiddles(player);
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