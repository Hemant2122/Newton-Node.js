
const express = require("express");
const server = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const homeRoute = require("./routes/home.routes");



dotenv.config({path: path.resolve(__dirname,'./.env')});


// REGISTER ROUTES
server.use("/api/v1/home", homeRoute);



// ATTACH DATABASE

// const connectionString = "mongodb://localhost:27017"; //DANGEEROUSSS...
const connectionString = process.env.MONGO_CONNECTION; // NOT DANGEEROUSSS...(prefereed good practise);
const database = "/CurrencyExpressJsBackendProject";

mongoose
.connect(connectionString + database)
.then(() => {
    console.log("DB is connected");
}).catch(() => {
    console.log("DB connection error!!");
});

server.listen(8082, () => {
    console.log("runing server port 8082 !!");
});