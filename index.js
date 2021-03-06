const config = require("./config"); 

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;

mongoose.connect(
  config.mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, res) => {
    if (error) {
      console.log("Connection error", error);
    } else {
      app.listen(port, () => {
        console.log("Server running on port", port);
      });
    }
  }
);
