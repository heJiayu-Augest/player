const http = require("http");
http.createServer((rep,res) =>{
    res.end("hello world");
}