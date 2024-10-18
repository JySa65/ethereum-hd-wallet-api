import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

import { wallets } from "./wallets";

app.use("/wallets", wallets);

export default app;
