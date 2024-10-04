const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const config = require('./config');
const cardsRoutes = require('./routes/cards-routes');
const userRoutes = require('./routes/users-routes');
const mailer = require('./mailer/mailer');

const PORT = config.server.PORT;
const URL = config.database.url;
const SECRET_KEY = config.secret;
const app = express();


//sets

//middleware
app.use(cookieParser());
app.use(express.json());

//routes
app.use(cardsRoutes);
app.use(userRoutes);

//mailer
app.use(mailer);

mongoose
 .connect(URL)
 .then(() => console.log('Connected to MongoDB'))
 .catch((err) => console.log(`Connection failed: ${err}`));


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("server started");
})
