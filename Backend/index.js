import express from "express";
import userRouter from "./routes/user.js";
const app = express();
const port = 3000;


app.listen(console.log("http://localhost:" + port));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/user", userRouter);
