const express = require('express');
const dotenv = require('dotenv').config();
const router = express.Router();

// declare mongoose for connecting to MongoDB
/*
const mongoose = require('mongoose');
var muser = process.env.MONGOUSER;
var mpass = process.env.MONGOPASS;
var mDB = "@ds131878.mlab.com:31878/pacc-dev"
mongoose.connect('mongodb://'+muser+':'+mpass+mDB);
*/

// declare axios for dummy data
const axios = require('axios');
const axiosAPI = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts - axios dummy data for initial setup testing
router.get('/projects', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${axiosAPI}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
