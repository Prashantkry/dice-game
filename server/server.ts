import * as dotenv from "dotenv";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index";


const result = dotenv.config();
if (result.error) {
    console.log("Error in env variable ,aborting");
    process.exit(500);
}

import { isInteger } from "./utils";
import { logger } from "./logger"; // must be after env data

let port: Number;

const app = express();

// cors  
app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

// creating server 
const server = http.createServer(app)

const PORT = process.env.PORT || 8000;

// mongo db url
const mongoUrl = process.env.MONGO_URL;
mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on("error", (err) => {
    logger.error(`MongoDB connection error: ${err}`);
    process.exit(500);
});

server.listen(port, () => {
    logger.info(`HTTP API sever is running at http://localhost:${PORT}/`);
});

app.use('/', router())
