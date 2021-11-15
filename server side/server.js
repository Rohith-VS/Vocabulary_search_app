import { Express } from "express";
import cors from "cors";

// intializing server settings
const app = express();
app.use(cors());
app.use(express.json());

// handling all api request from front-end
app.use();

export default app;