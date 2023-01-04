import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME || "neoflex_project";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_POST || 5432; 


export default new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: "postgres",
        host: DB_HOST,
        port: +DB_PORT,
    })