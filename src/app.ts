import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";
import { wallets } from "./wallets";

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Routes
app.use("/api/v1/wallets", wallets);

app.get("/", (req: Request, res: Response) => {
    res.send({msg: "Welcome to the Wallets API"});
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
