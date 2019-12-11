/*jslint node:true*/
"use strict";

/*global alert*/




    var server = require("./server"), 
    router = require("./router"), 
    requestHandlers = require("./requestHandlers"); 


    var handle = {}; 
    handle["/"] = requestHandlers.start; 
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;
    handle["/show"] = requestHandlers.show; 
    handle["/app"] = requestHandlers.app; 

server.start(router.route, handle); 

const express = require('express'),
app = express(),
path = require('path'),
serveStatic = require('serve-static')

app.use(serveStatic(path.join(__dirname, 'public-optimized')))
app.use(serveStatic(path.join(__dirname, 'public')))
app.listen(3000)


