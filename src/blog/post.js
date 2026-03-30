const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/baza');

const Post = sequelize.define('Post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  author: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  published_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Post;