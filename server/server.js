const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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
app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true,
   methods: 'GET,POST,PUT,PATCH,DELETE'
}));
app.use(cookieParser());
app.use(express.json());

//routes
app.use(cardsRoutes);
app.use(userRoutes);

//mailer
app.use(mailer);

app.get('/api/verifyToken', (req,res) => {
	const token = req.cookies.authorization || req.headers['authorization'];
	
	if (!token || token.lenght == 0) { res.status(401).json({error: "Authorization failed (noToken)"}); }
	const formattedToken = token.startsWith('Bearer')? token.slice(7, token.lenght) : token;
	
	jwt.verify(formattedToken, SECRET_KEY, (err,decoded) => {
		if(err) { return res.status(401).json({error: "Authorization failed (badToken)"})}
		
		res.status(200).json(decoded);
	});
})


mongoose
 .connect(URL)
 .then(() => console.log('Connected to MongoDB'))
 .catch((err) => console.log(`Connection failed: ${err}`));


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`server listenin on ${PORT} port`);
})
