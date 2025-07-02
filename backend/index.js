const express = require("express");
const app = express();
const mainRouter = require("./routes");
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(PORT);
