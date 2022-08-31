import axios from "axios";
import { NextFunction, Request, Response } from "express";


export async function ValidateUserExistance(req: Request, res: Response, next: NextFunction) {
    const { firstUser, secondUser } = req.body;

    try {
        const firstUserInfo = await getUserInfo(firstUser);
        const secondUserInfo = await getUserInfo(secondUser);

        if (JSON.stringify(secondUserInfo) === "[]" || JSON.stringify(firstUserInfo) === "[]") {
            return res.sendStatus(404);
        }

        res.locals.firstUserInfo = firstUserInfo;
        res.locals.secondUserInfo = secondUserInfo;
        next();

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);

    }
}

async function getUserInfo(user: string) {
    let returner: object[];

    await axios.get(`http://api.github.com/users/${user}/repos`)
        .then(response => {
            returner = response.data;
        })
        .catch(error => {
            console.error(error);
        });

    return returner;
}