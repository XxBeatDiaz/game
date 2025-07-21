import { getPlayerByName, createPlayer } from "../API/playerApi.js";
import { Player } from "../classes/Player.js";
import readline from "readline-sync";


export async function loadPlayer(playerName) {
    const player = await getPlayerByName(playerName);
    return new Player(player);
}

export async function addPlayer(username) {
    const obj = {name: username, times: []};
    const newPlayer = await createPlayer(obj);
    return new Player(newPlayer);
}