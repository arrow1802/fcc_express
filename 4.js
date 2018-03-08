var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var port = process.argv[2];
    var app = express()
    app.set('views', path.join(__dirname, 'templates'))
    app.set('view engine', 'jade')
    app.use(bodyparser.urlencoded({extended: false}))
    app.post('/form', function(req, res){
        res.send(req.body.str.split('').reverse().join(''));
    })
    app.listen(port)
