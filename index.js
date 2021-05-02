const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect(
  "mongodb://localhost:27017/namasteconnections",
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
