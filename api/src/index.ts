import express from "express";
import { config } from "./configuration";
import { router } from "./routes/router";
import { errorHandler } from "./middleware/error-handler";

const app = express();
const port = config.port || 8080;

app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
