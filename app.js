"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propmt = require('prompt-sync')();
var n = parseInt(propmt('please enter num of rowss:'));
var a = "";
for (var d = 1; d <= n; d++) {
    for (var i = 1; i <= d; i++) {
        a += "*";
    }
    a += "\n";
}
console.log(a);
