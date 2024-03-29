require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolsize: 2,
  },
  () => {
    console.log("Connected to Mongo:", process.env.MONGO_URI);
  }
);

module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
