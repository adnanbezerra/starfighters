import { Router } from "express";
import { getRanking, postBattle } from "../controllers/BattleController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { ValidateUserExistance } from "../middlewares/ValidateUsersExistance.js";
import { BattleSchema } from "../schemas/BattleSchema.js";

export const BattleRoute = Router();

BattleRoute.post('/battle', validateSchema(BattleSchema), ValidateUserExistance, postBattle);
BattleRoute.get('/ranking', getRanking);