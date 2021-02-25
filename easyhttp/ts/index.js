"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
exports.port = 8000;
var server;
exports.create = function (callback) {
    server = http.createServer(callback);
};
exports.listenFor = function (eventType, callback) {
    server.on(eventType, callback);
};
exports.setPort = function (newPort) {
    exports.port = newPort;
};
// --- KEEP AT EOF --- //
exports.start = function (print) {
    if (print === void 0) { print = true; }
    server.listen(exports.port);
    if (print) {
        console.log("Successfully started server - port: " + exports.port);
    }
};
exports.close = function (print) {
    if (print === void 0) { print = true; }
    server.close();
    if (print) {
        console.log("Successfully started server");
    }
};
//# sourceMappingURL=index.js.map