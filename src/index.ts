import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { BattleRoute } from './routers/BattleRoute.js';
dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());

server.use(BattleRoute);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`It's alive on port ${PORT}`);
})