import joi from 'joi';

export const BattleSchema = joi.object({
    firstUser: joi.string().trim().required(),
    secondUser: joi.string().trim().required()
})