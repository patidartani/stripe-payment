const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// MongoDB Connection
const connectDb = require("./Database/database");
connectDb();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const router = require("./routes/router");
app.use("/api", router);

// ✅ Test Route for Railway
app.get("/ping", (req, res) => {
  res.send("✅ Railway app is live!");
});

// ✅ Serve Frontend in Production
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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