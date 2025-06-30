const express=require("express");
const app=express();
const mainRouter=require("./routes/user_route");
const PORT=3000;

app.use("/api/v1",mainRouter);

app.use(express.json());


app.listen(PORT);