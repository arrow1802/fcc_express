var express = require('express');
var path = require('path');
var msg = require('crypto');
var fs =  require('fs');
var bodyparser = require('body-parser')
var port = process.argv[2];
    var app = express()
    // app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    // app.set('views', path.join(__dirname, 'templates'))
    // app.set('view engine', 'jade')
    // app.use(bodyparser.urlencoded({extended: false}))
    // app.use(require('stylus').middleware(process.argv[3]));
    // app.use(express.static(process.argv[3]));
    app.get('/books', function(req, res){
        // console.log(req.query)
        fs.readFile(process.argv[3], function (err,data) {
            data = JSON.parse(data);
            res.send(data);
        })
        
    });
    // app.get('/home', function(req, res) {
    //     res.render(process.argv[3], {date: new Date().toDateString()})
    // })
    // app.post('/form', function(req, res){
    //     res.send(req.body.str.split('').reverse().join(''));
    // })
    app.listen(port)