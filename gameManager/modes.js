// imports
import loadedRiddles from "../services/allRiddles.js";
import runQuestions from "../utils/gameUtils.js";

// Run default game (All riddles infinite fails)
export function runRegularMode(player) {
    runQuestions(loadedRiddles, player);

    console.clear();
    player.showStats();
}

// Run the easiest riddles
export function runEasiestRiddles(player) {
    const easiestRiddles = loadedRiddles.filter(r => r.difficulty === 'easy');
    runQuestions(easiestRiddles, player);

    console.clear();
    player.showStats();
}

// Run the medium riddles
export function runMediumRiddles(player) {
    const mediumRiddles = loadedRiddles.filter(r => r.difficulty === 'medium');
    runQuestions(mediumRiddles, player);

    console.clear();
    player.showStats();
}

// Run the hardest riddles
export function runHardestRiddles(player) {
    const hardRiddles = loadedRiddles.filter(r => r.difficulty === 'hard');
    runQuestions(hardRiddles, player);

    console.clear();
    player.showStats();
}

// Run only one riddle
export function runChoosenRiddle(player, choosen) {
    console.log(choosen);
    const riddle = [];
    const oneRiddle = loadedRiddles[choosen];
    riddle.push(oneRiddle)
    console.log(riddle);
    
    runQuestions(riddle, player);

    console.clear();
    player.showStats();
}


// For me dont touch
import { loadRiddles, loadOneRiddle, loadRiddlesByDifficulty } from "../services/riddleServ.js";
async function regularMode(player) {
    const loadedRiddles = await loadRiddles();
    runQuestions(loadedRiddles, player);

    console.clear();
    player.showStats();
}

async function easiestRiddles(player) {
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("easy");
    runQuestions(loadedEasiestRiddles, player);
    
    console.clear();
    player.showStats();
}

async function mediumRiddles(player) {
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("medium");
    runQuestions(loadedEasiestRiddles, player);
    
    console.clear();
    player.showStats();
}

async function hardestRiddles(player) {
    const loadedEasiestRiddles = await loadRiddlesByDifficulty("hard");
    runQuestions(loadedEasiestRiddles, player);

    console.clear();
    player.showStats();
}

async function choosenRiddle(riddleId, player) {
    const loadedRiddle = await loadOneRiddle(riddleId);
    runQuestions(loadedRiddle, player);

    console.clear();
    player.showStats();
}