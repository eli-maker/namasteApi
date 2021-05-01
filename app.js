const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const centerRoutes = require('./routes/centerRoutes');

const app = express();
app.use( bodyParser.json());  


app.use("/api/users/", userRoutes);
app.use("/api/centers/", centerRoutes);


module.exports = app;
