// silly chrome wants SSL to do screensharing
var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    http = require('http');


var privateKey = fs.readFileSync('./config/sslcerts/key.pem').toString(),
    certificate = fs.readFileSync('./config/sslcerts/cert.pem').toString();


var app = express();

app.use(express.static(__dirname));
console.log('Path: ' + __dirname);

https.createServer({key: privateKey, cert: certificate}, app).listen(8000);
http.createServer(app).listen(8001);

console.log('running on https://localhost:8000 and http://localhost:8001');
