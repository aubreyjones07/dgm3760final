/*jslint node:true*/
"use strict";

/*global alert*/


var greet = function(name) {
    if (name === undefined){
    name = 'world'; 
    }
    return 'Hello ' + name + '!'; 
};

module.exports = greet;