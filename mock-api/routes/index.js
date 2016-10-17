var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '6969',
    user: 'root',
    password: ''
});
connection.query('USE ita');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    connection.query('SELECT * FROM cars', function(err, rows) {
        res.send(rows);
    });
});

module.exports = router;