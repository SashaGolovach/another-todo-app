const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors')
const MongoDBStore = require('connect-mongodb-session')(session);

const todoRouters = require('./routes');

const MONGODB_URI = '';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(cors())
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(todoRouters);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Database connected!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
