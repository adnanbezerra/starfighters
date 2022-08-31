import { connection } from "../database/postgres.js";

export async function gatterUserInfo(username) {
    return connection.query(`SELECT * FROM fighters WHERE name = $1`, [username]);
}

export async function createNewUser(username) {
    return connection.query(`INSERT INTO fighters (username) VALUES ($1)`, username);
}

export async function registerNewWin(username: string) {
    return connection.query(`UPDATE fighters SET wins = wins + 1 WHERE username = $1`, [username]);
}

export async function registerNewLoss(username: string) {
    return connection.query(`UPDATE fighters SET losses = losses + 1 WHERE username = $1`, [username]);
}

export async function registerNewDraw(username: string) {
    return connection.query(`UPDATE fighters SET draws = draws + 1 WHERE username = $1`, [username]);
}