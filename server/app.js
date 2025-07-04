const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const connectDb = require("./Database/database");
connectDb();

const router = require("./routes/router");

app.use(express.json());
app.use(cors());

// API Routes
app.use(router);

// ========= Serve Frontend (  Build) =========
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// ================================================

module.exports = app;



// const express = require("express");
// const app = express();
// const cors = require("cors");
// const dotenv=require("dotenv");
// dotenv.config()
// const connectDb=require("./Database/database")
// connectDb()
// const router=require("./routes/router")
// app.use(express.json());
// app.use(cors());

// //checkout api
// app.use(router)

// module.exports =app;