var ws = require("nodejs-websocket")
console.log("START");

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000

console.log("PORT",port)

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    
    conn.on("text", function (str) {
        console.log("Received ",str)
        conn.sendText(str.toUpperCase()+"!!!")
    })

    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        console.log(code);
        console.log(reason);
    })

}).listen(port)