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
        res.json(await walletsService.get(parseInt(req.params.id)));
    } catch (err) {
        console.error(`Error while getting the list`, (err as Error).message);
        next(err);
    }
}

async function create(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await walletsService.create(req.body));
    } catch (err) {
        console.error(`Error while creating the list`, (err as Error).message);
        next(err);
    }
}

export { getAll, get, create };
