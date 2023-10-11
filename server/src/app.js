import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRoute from "./routes/index.routes.js"



const app = express();
app.use(express.json());

const whiteList = [
    //"https://pruebasw.espoch.edu.ec:3011/",
    "http://localhost:4200",
    "https://localhost:4200",
  ];


app.use(cors({
    origin: whiteList,
    credentials: true
}));

app.use(cookieParser());
export default app;
app.use(indexRoute)