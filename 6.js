var express = require('express');
var path = require('path');
var msg = require('crypto');
var bodyparser = require('body-parser')
var port = process.argv[2];
    var app = express()
    app.put('/message/:NAME', function(req, res){
        res.send(msg.createHash('sha1').update(new Date().toDateString() + req.query.NAME).digest('hex'));
    });
    app.listen(port)
