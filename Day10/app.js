const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

const userRouter = require("./routes/userRoutes");

require("./models/db");

