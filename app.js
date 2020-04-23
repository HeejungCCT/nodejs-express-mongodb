const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) =>{
res.send('we are on home');
});

app.get('/posts', (req, res) =>{
res.send('we are on posts');
});

//conect to db
mongoose.connect (process.env.DB_CONNECTION, { useNewUrlParser: true },() =>
console.log('connectd DB!')
);
//how to listen to the server
app.listen(3000);