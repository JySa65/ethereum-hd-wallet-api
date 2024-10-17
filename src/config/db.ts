import mongoose from "mongoose";

export default function connectDB() {
    const url = "mongodb://mongo_db:27017";

    try {
        mongoose.connect(url);
    } catch (err) {
        console.log((err as Error).message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;

    dbConnection.once("open", () => {
        console.log(`Database connected: ${url}`);
    });

    dbConnection.on("error", (err) => {
        console.error(`Connection error: ${err}`);
    });
}
