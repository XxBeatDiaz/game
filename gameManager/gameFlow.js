import readline from "readline-sync";
import { mainMenu } from "../menus/menus.js";
import { loadPlayer, addPlayer } from "../services/playerServ.js";

export async function startGame() {
    const username = readline.question(`Enter your name> `);
    let player = await loadPlayer(username);

    if (!player.name) {
        player = await addPlayer(username);
    } else {
        console.log(`You connect with: ${player.name}`);
    }
    
    await mainMenu(player);
}

startGame();