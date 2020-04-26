const express = require('express'); // to provide a robust set of features for web app
const app = express();
const mongoose = require ('mongoose'); // to validate schema, manage relationships among data
const bodyParser = require ('body-parser'); // to parse text bodies & url encoded request bodies
const cors = require('cors'); // to provide a Connect/Express middleware that can be used to enable CORS with various options
require('dotenv/config'); // to hide credentails in github 

// middlewares
app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// routes
app.get('/', (_req, res) =>{
res.send('Lotus Massage Centre');
});

app.get('/posts', (_req, res) =>{
res.send('');
});

// connect to DB, secure
mongoose.connect (process.env.DB_CONNECTION, { useNewUrlParser: true },() =>
console.log('connectd DB!')
);

// listen to the server
app.listen(3000);