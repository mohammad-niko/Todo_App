import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { logger } from "./logger.js";
// import taskRoute from "./router/taskRoute.js";
import userRoute from "./router/userRoute.js";
import { connectDB } from "./connectANDmodels/connectDB.js";
const server = express();
dotenv.config();

//config:
const PORT = process.env.PORT || 5500;
const MONGODBURI = process.env.MONGODBURI;

//middlewares:
server.use(
  helmet({ crossOriginEmbedderPolicy: false, contentSecurityPolicy: false })
);
server.use(cors());
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));



//Routes:
server.use("/api/user", userRoute);

//404 page not found
server.use((req, res) => {
  res.status(404).json({ message: "page not found" });
});

//start server and connect to mongoDB:
server.listen(PORT, async () => {
  try {
    await connectDB(MONGODBURI);
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log(`error in connecting in mongo ${error}`);
  }
});
