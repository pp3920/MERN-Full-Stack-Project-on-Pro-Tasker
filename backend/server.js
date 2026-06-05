const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/connection");
const app = express();
// =========================
// CORS
// =========================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// =========================
// Middleware
// =========================
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// =========================
// Routes
// =========================
app.use(
  "/api/auth",
  require("./routes/api/userRoutes")
);
app.use(
  "/api/projects",
  require("./routes/api/projectRoutes")
);
app.use(
  "/api",
  require("./routes/api/taskRoutes")
);
// =========================
// Test Route
// =========================
app.get("/", (req, res) => {
  res.json({
    message: "Pro Tasker API Running",
  });
});
// =========================
// DB Connection
// =========================
db.once("open", () => {
  app.listen(
    process.env.PORT || 3000,
    () => {
      console.log(
        `Server running on port ${
          process.env.PORT || 3000
        }`
      );
    }
  );
});