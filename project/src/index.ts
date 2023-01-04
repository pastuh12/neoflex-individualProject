
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import express from "express";
import logger from "morgan";

import sequelize from "./db";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080
const APP_MODE = process.env.APP_MODE || "dev"

app.use(bodyParser.json());
app.use(logger(APP_MODE))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const start = async function(){
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.get("/", (request, response) => {
            response.send("Hello world!");
        });
        app.listen(PORT, () => console.log(`Running on port ${PORT}`));
        
    } catch (error) {
        
    }
}

start()
