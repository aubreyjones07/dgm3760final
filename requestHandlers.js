/*jslint node:true*/
"use strict";

/*global alert*/

var querystring = require("querystring"), 
fs = require("fs"),
formidable = require("formidable"); 
 


function start(response) {
    console.log("Request handler 'start' was called."); 
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    '<link rel="stylesheet" type="text/css" href="styles.css">' +
    '</head>' +
    '<body>' +
    '<header>' +
    '<h1 class="headerOne">Web Design and Development</h1>' +
    '<h2 class="headerTwo">"A user interface is like a joke. If you have to explain it, it’s not that good."</h2>' +
    '</header>' +
    '<nav>' +
    '<ul>' +
    '<li><a href="graphicdesign.html">Graphic Design</a></li>' +
    '<li><a href="uxdesign.html">UX Design</a></li>' +
    '<li><a href="frontend.html">Front End Web Development</a></li>' +
    '<li><a href="backend.html">Back End Development</a></li>' +
    '<li><a href="about.html">About</a></li>' +
    '<li><a href="contactinfo.html">Contact Info</a></li>' +
    '</ul>' +
    '</nav>' +
    '<form action="/upload" enctype="multipart/form-data" ' + 
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type = "submit" value="Upload file" />' +
    '</form>' +
    '<form action="/upload" enctype="multipart/form-data" ' + 
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type = "submit" value="Upload file" />' +
    '</form>' +
    '<form action="/upload" enctype="multipart/form-data" ' + 
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type = "submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>' ;

response.writeHead(200, {"Content-Type": "text/html"}); 
response.write(body); 
response.end(); 

}


function upload(response, request){
console.log("Request handler 'upload' was called."); 
var form = new formidable.IncomingForm();
console.log("about to parse"); 
form.parse(request, function(error, fields, files){
console.log("parsing done");
fs.rename(files.upload.path, "/tmp/scenicheroimage.jpg", function (error) {
if (error) {
fs.unlink("/tmp/scenicheroimage.jpg"); 
fs.rename(files.upload.path, "/tmp/scenicheroimage.jpg"); 

}

});
response.writeHead(200, {"Content-Type": "text/html"}); 
response.write("received image:<br/>");  
response.write("<img src=' /show' />"); 
response.end(); 
});

}



function show(response) {
console.log("Request handler 'show' was called."); 
response.writeHead(200, {"Content'Type": "image/jpg"}); 
fs.createReadStream("/tmp/scenicheroimage.jpg").pipe(response); 

}



exports.start = start; 
exports.upload = upload; 
exports.show = show; 
