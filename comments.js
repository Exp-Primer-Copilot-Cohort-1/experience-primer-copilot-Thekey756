// Create web server

var express = require('express');
var router = express.Router();
var fs = require('fs');

// GET comments from file
router.get('/', function(req, res, next) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// POST comment to file
router.post('/', function