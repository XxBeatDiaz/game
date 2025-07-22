// imports
import { loadRiddles, loadOneRiddle, loadRiddlesByDifficulty } from "../services/riddleServ.js";
import runQuestions from "../utils/gameUtils.js";

// Run default game (All riddles infinite fails)
export async function regularMode(player) {
    const loadedRiddles = await loadRiddles();
    runQuestions(loadedRiddles, player);

    console.clear();
    player.showStats();
}

// Run the easiest riddles
export async function easiestRiddles(player){
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("easy");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

// Run the medium riddles
export async function mediumRiddles(player){
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("medium");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

// Run the hardest riddles
export async function hardestRiddles(player){
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("hard");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

// Run only one riddle
export async function runCoosenRiddle(riddleId, player) {
    const loadedRiddle = await loadOneRiddle(riddleId);
    runQuestions(loadedRiddle, player);

    console.clear();
    player.showStats();
}