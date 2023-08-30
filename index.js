import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("It is running");
});
