import { getAllRiddles } from "../API/riddleApi.js";

export function showMainMenu() {
    console.log(`
        ====MENU====
        1. New game
        2. Riddles
        3. Modes
        0. Exit
        `);
}

export async function showRiddlesMenu() {
    const allRiddles = await getAllRiddles();
    console.log(`====Riddles====`);
    console.log(`\n+. Create riddle\n`);
    for (let i = 0; i < allRiddles.length; i++) {
        console.log(`${i + 1}. ${allRiddles[i].name}`);
    }
    console.log(`0. Back`);
    return allRiddles.length;
}

export function showModesMenu() {
    console.log(`
        ====Modes====
        1. Regular (All riddles)
        2. Easiest riddles only
        3. Medium riddles only
        4. Hardest riddles only
        0. Back
        `);
}

export function showDiffcultiesMenu() {
    console.log(`
        ====Diffculties====
        1. Easy
        2. Medium
        3. Hard
        `);
}

export function showTypesMenu() {
    console.log(`
        ====Types====
        1. regular
        2. choices
        `);
}