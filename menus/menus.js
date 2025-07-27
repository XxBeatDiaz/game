import readline from "readline-sync";
import loadedRiddles from "../services/allRiddles.js"
import { showMainMenu, showRiddlesMenu, showModesMenu } from "./showMenus.js";
import { runRegularMode, runEasiestRiddles, runMediumRiddles, runHardestRiddles, runChoosenRiddle } from "../gameManager/modes.js";
import { addRiddle } from "../services/riddleServ.js";

export async function mainMenu(player) {
    let flag = true;
    while (flag) {
        showMainMenu();
        const choice = readline.question(`Choose option> `);

        switch (choice) {
            case "1":
                runRegularMode(player);
                break;
            case "2":
                await riddlesMenu(player);
                break;
            case "3":
                modesMenu(player);
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
        showRiddlesMenu();
        const choosen = readline.question(`Choose option> `);
        if (choosen === "+") {
            let isSuccess = false;
            while(!isSuccess){
                isSuccess = await addRiddle();
            }

        } else if (choosen === "0") {
            return;

        } else if (parseInt(choosen) >= 1 && parseInt(choosen) <= loadedRiddles.length) {
            runChoosenRiddle(player, parseInt(choosen) - 1);

        } else {
            console.log("Not valid try again");
        }
    }
}

export function modesMenu(player) {
    let flag = true;
    while (flag) {
        showModesMenu();
        const modeChoosen = readline.question(`Coose option> `);
        switch (modeChoosen) {
            case "1":
                runRegularMode(player);
                break;
            case "2":
                runEasiestRiddles(player);
                break;
            case "3":
                runMediumRiddles(player);
                break;
            case "4":
                runHardestRiddles(player);
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