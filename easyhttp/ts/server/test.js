"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server = require("../index");
var fs = require("fs");
server.create(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("404");
        }
        else {
            res.write(data);
        }
        res.end();
    });
});
server.start();
//# sourceMappingURL=test.js.map