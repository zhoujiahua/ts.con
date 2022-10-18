import apis from "./apis";
import express from "express";
import * as homeController from "./controllers/home";
const app = express();

app.use("/api/users", apis.UserRouter);
app.get("/", homeController.index);

const PORT = process.env.PORT || 5000;
app.set("port", PORT);

export default app;
