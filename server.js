const express = require("express");
const morgan = require("morgan");

// const db = require("./db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
