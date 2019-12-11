/*jslint node:true*/
"use strict";

/*global alert*/





console.log("Hello");


console.log("World");



console.log('Hello');
setTimeout(function() {
console.log('World');
}, 1000);

var write_world = function() {
    console.log('World');
    };
    console.log('Hello');
    setTimeout(write_world, 1000);


var fs = require('fs');
fs.stat('/etc/passwd', function(err, stats) {
console.dir(stats);
});


var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('<b>Hello World</b>');
response.end();
}).listen(8080);


var http = require('http');
http.createServer(function(request, response) {
console.log('Handling HTTP request');
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('<b>Hello World</b>');
response.end();
}).listen(3030);
var a;
for (var i=0; i < 10000000000; i += 1) {
a = i;
}
console.log('For loop has finished');



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))