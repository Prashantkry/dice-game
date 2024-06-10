// api work 
import express from "express";
import authentication from "./authentication";
import diceRouter from "./diceRouter";

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    diceRouter(router);
    return router;
}

