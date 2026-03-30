const express = require('express');
const app = express();

const sequelize = require('./config/baza');
require('./blog/post');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync();

const blogSciezki = require('./blog/routes');
app.use('/blog', blogSciezki);

app.listen(3000, () => console.log('Serwer działa na http://localhost:3000'));