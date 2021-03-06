
// app.js
// load the things we need

'use strict'

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// set view engine to ejs
 app.set('view engine', 'ejs');

// use res render to load ejs view file

// index page
 app.get('/', (req,res) => {
   res.render('pages/index');

    });

// about page
  app.get('/about', (req,res) => {
   res.render('pages/about');

    });

// market page
  app.get('/market', (req,res) => {
    res.render('pages/market');
    });
// sample page
  app.get('/search', (req,res) => {
      res.render('//https://scotch.io/tutorials/use-ejs-to-template-your-node-application');
     });

// run the server
  app.listen(8080, () => {
     console.log("Go to 'localhost:8080'...");
    });
