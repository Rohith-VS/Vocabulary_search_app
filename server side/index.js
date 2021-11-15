import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// server configurations

dotenv.config();
const port = process.env.port || 5000;
const url = process.env.DATABASE_LINK;


// connection to DB is intialized.
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFinfAndModify: false,
    useCreateIndex: true,
  })
  .then(app.listen(port, () => console.log(` port ${port}`)))
  .catch((err) => {
    console.log(err);
  });
