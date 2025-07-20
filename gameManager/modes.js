// imports
import { getAllRiddles, getRiddleById } from "../API/riddleApi.js";
import { Player } from "../classes/Player.js"//temp
// import { getPlayer } from "../services/playerServ.js"
import { loadRiddles, loadRiddlesByDifficulty } from "../services/riddleServ.js";
import { runQuestions } from "../utils/gameUtils.js";

// Run default game (All riddles infinite fails)
export async function regularMode() {
    // const player = getPlayer();// Function not made yet (player API)
    const player = new Player("Avi");//temp
    const allRiddles = await getAllRiddles();
    const loadedRiddles = loadRiddles(allRiddles);
    runQuestions(loadedRiddles, player);

    console.clear();
    player.showStats();
}

export async function easiestRiddles(){
    const player = new Player("Nati");//temp
    const allRiddles = await getAllRiddles(); // Replace with specific query
    const loadedEasiestRiddles = loadRiddlesByDifficulty(allRiddles, "easy");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

export async function mediumRiddles(){
    const player = new Player("yoni");//temp
    const allRiddles = await getAllRiddles();// Replace with specific query
    const loadedEasiestRiddles = loadRiddlesByDifficulty(allRiddles, "medium");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

export async function hardestRiddles(){
    const player = new Player("Malka");//temp
    const allRiddles = await getAllRiddles();// Replace with specific query
    const loadedEasiestRiddles = loadRiddlesByDifficulty(allRiddles, "hard");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

export async function runCoosenRiddle(riddleId) {
    const riddles = [];
    const player = new Player("Bob");//temp
    const riddle = await getRiddleById(riddleId);
    riddles.push(riddle);
    const loadedRiddles = loadRiddles(riddles);
    runQuestions(loadedRiddles, player);

    console.clear();
    player.showStats();
}