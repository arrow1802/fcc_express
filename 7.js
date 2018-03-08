var express = require('express');
var path = require('path');
var msg = require('crypto');
var bodyparser = require('body-parser')
var port = process.argv[2];
    var app = express()
    app.get('/search', function(req, res){
        res.send(req.query);
    });
    app.listen(port)
