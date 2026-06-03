const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


require("dotenv").config();

const express =
require("express");

const db =
require("./config/connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(
"/api/auth",
require(
"./routes/api/userRoutes"
)
);

app.use(
"/api/projects",
require(
"./routes/api/projectRoutes"
)
);

app.use(
"/api",
require(
"./routes/api/taskRoutes"
)
);

app.get(
"/",
(req, res) => {

  res.json({
    message:
    "Pro Tasker API Running",
  });

}
);

db.once(
"open",
() => {

  app.listen(
    process.env.PORT || 3000,
    () => {

      console.log(
        "Server running"
      );

    }
  );

}
);