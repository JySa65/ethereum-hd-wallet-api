import app from "./src/app";
import { watchTokenTransfers } from "./src/transfers/transfers.listener";

const port = 3000;

// Start watching for ERC-20 deposits in the background
watchTokenTransfers();

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
