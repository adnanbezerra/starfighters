import { Request, Response } from "express";
import { createNewBattle } from "../services/BattleService.js";

export async function postBattle(req: Request, res: Response) {
    const firstUserInfo = res.locals.firstUserInfo;
    const secondUserInfo = res.locals.secondUserInfo

    const { firstUser, secondUser } = req.body;
    const names = [firstUser, secondUser]

    const battle = await createNewBattle(firstUserInfo, secondUserInfo, names);

    res.sendStatus(201);
}

export async function getRanking(req: Request, res: Response) {
    
}