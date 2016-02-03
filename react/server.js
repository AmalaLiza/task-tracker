var webpack = require('webpack');
var Immutable = require('immutable');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var fs = require('fs');
var bodyParser =require("body-parser");
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var app = express();

app.use('/assets', proxy(url.parse('http://localhost:8080/assets')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getBoard', function(request, response) {
    console.log("getBoard");
    var boardList = [];

    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    fs.readFile("./test.txt", "utf8", function(err, data) {
        if (err) throw err;
        response.send({
            status : 200,
            data : data
        })
    });
});

app.post('/write', function(request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    fs.writeFile("./test.txt", JSON.stringify(request.body.data), function(err) {
        if(err) return console.log(err);
        response.send({
            status : 200
        })
    });
});


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }

}).listen(8000, 'localhost', function (err) {
    if (err) console.log(err);
    console.log('Listening at localhost:8000');
});

app.listen(8080, 'localhost',function (err) {
    if (err) console.log(err);
    console.log('Listening at localhost:8080');
});