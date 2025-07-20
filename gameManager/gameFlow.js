import readline from "readline-sync";
// import { mainMenu } from "../menus/menus.js";
import { loadPlayer, addPlayer } from "../services/playerServ.js";

export async function startGame() {
    readline.question(`Press Enter`);
    console.clear();

    const username = readline.question(`Enter your name> `);
    const player = await loadPlayer(username);
    
    if (!player.name) {
        const a = await addPlayer(username);
        console.log(a);
    }else{
        console.log(`You connect with: ${player.name}`);
        
    }
    // await mainMenu();


}

startGame();