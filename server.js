import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import items from "./routes/api/items.js";

// import init-function for initiate metas into db
import Util from "./models/util.js";

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

// DB config
import dbURI from "./config/keys.js";
const db_conn_string = dbURI.mongoURI;
// const db = 'mongodb://dbservice:27017/mern';
// const db = 'mongodb://localhost:27017/mern';

// Connect to mongo
mongoose
  .connect(db_conn_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => {
    console.log("DB connection failed.");
    console.log(err);
  });

// Use Routes
app.use("/api/items", items); // a route I defined under api/

// Serve static assets if in production, or, as here I commented the line out,
// when / or /index.html isrequested
app.get("/index.html", (req, res) => {
  console.log("initiating metas into db...");
  Util.make_meta(mongoose.connection.db);
  console.log("u.make_rlts called.s");
  app.use(express.static("client/build"));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

import test from "./entityClasses/entityTest.js";

app.get("/pas", (req, res) => {
  console.log("loading pas into db...");
  test();
});

const port = process.env.PORT || 5000;
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`));
