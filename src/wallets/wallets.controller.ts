import { Request, Response, NextFunction } from "express";
import * as walletsService from "./wallets.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await walletsService.getAll());
    } catch (err) {
        console.error(`Error while getting the lists`, (err as Error).message);
        next(err);
    }
}

async function get(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await walletsService.get(req.params.id));
    } catch (err) {
        console.error(`Error while getting the list`, (err as Error).message);
        next(err);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.externalId) {
        res.status(400).json({ error: "externalId field is required" });
        return;
    }
    try {
        res.json(await walletsService.create(req.body));
    } catch (err) {
        console.error(`Error while creating the wallet`, (err as Error).message);
        next(err);
    }
}

export { getAll, get, create };
