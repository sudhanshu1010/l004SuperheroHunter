var MD5 = require('crypto-js/md5');

let ts = new Date().getTime();
let publicKey = "218c68db0b36c6f579524361323e364e"
let privateKey = "05be9773f60f7a97134b66c76083a140312d55ef"

console.log(MD5(ts + privateKey + publicKey).toString())
// console.log(ts)
