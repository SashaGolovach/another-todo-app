const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const todoRouters = require('./routes');

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});
// const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store,
  })
);
// app.use(csrfProtection);
// app.use(flash());

app.use(todoRouters);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Database connected!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
