const express = require('express');
const app = express();

const blogSciezki = require('./blog/routes');
app.use('/blog', blogSciezki);