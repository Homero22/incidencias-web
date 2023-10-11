import * as dotenv from 'dotenv';
import e from 'express';

dotenv.config();

export const dbVariables={
    dbUser: process.env.DB_USER,
    dbServer: process.env.DB_SERVER,
    dbPassword: process.env.DB_PASSWORD,
    dbDialect: process.env.DB_DIALECT,
    dbName:process.env.DB_NAME,
    dbPort:process.env.DB_PORT,
}
export const configVariables={
    port: process.env.SERVER_PORT,
}