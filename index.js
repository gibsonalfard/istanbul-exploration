var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

viewDirectory = __dirname + '/view';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/add', function (req, res) {
//     res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
// });

// app.get('/subtract', function (req, res) {
//     res.send(handleCalculatorRequest(subtractor.subtract, req.query.numberA, req.query.numberB));
// });

// app.get('/multiply', function (req, res) {
//     res.send(handleCalculatorRequest(multiplier.multiple, req.query.numberA, req.query.numberB));
// });

// app.get('/divide', function (req, res) {
//     res.send(handleCalculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
// });

app.get('/', function (req, res){
    res.sendFile(path.join(viewDirectory + '/index.html'));
});

app.listen(3000);
module.exports = app;