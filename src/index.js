const express = require('express');
const app = express();

const sequelize = require('./config/baza');
require('./blog/post');

const blogSciezki = require('./blog/routes');
app.use('/blog', blogSciezki);
