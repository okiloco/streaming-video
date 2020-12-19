const express = require("express");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

//routes
app.use(require("./routes"));

app.use(express.static(__dirname + "/public"));

io.on("connection", socket => {
  socket.on("stream", image => {
    //emitir a todos los sockets
    socket.broadcast.emit("stream", image);
  });
});

module.exports = http;
