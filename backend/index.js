const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");
const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/auth", usersRouter);
app.use("/projects", projectsRouter);

app.listen(port, () => {
  console.log(`Port up and running on  ${port} `);
});
