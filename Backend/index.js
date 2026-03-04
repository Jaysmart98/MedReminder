const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./database/db.connect");
const userrouter = require("./route/user.route");

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map(o => o.trim())
  : [];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);

//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }

//     return callback(null, false);
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   optionsSuccessStatus: 204,
// };

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin); // Helps you debug in Render logs
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Added PATCH for your profile upload
  allowedHeaders: ["Content-Type", "Authorization"],
};


app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));

app.use("/", userrouter);

const port = process.env.PORT || 8008;

connect();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
