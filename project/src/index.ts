import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import express from "express";
import * as logger from "morgan";
import * as Pg from "pg";

const postgres = new Pg({
    user: "admin",
    host: "localhost",
    database: "creditСonveyor",
    paswword: "admin",
    port: 5432,
});
const app = express();

dotenv.config();

const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get("/", (request, response) => {
    response.send("Hello world!");
});
app.listen(port, () => console.log(`Running on port ${port}`));
