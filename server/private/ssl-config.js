var crypto = require('crypto');
var fs = require("fs");
var path = require('path');

exports.privateKey = fs.readFileSync(path.join(__dirname, 'key.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, 'cert.pem')).toString();
exports.credentials = {key: exports.privateKey, cert: exports.certificate};