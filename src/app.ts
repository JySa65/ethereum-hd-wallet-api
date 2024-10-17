import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";

const app: Express = express();

connectDB();

import { wallets } from "./wallets";

app.use("/wallets", wallets);

export default app;
