const http = require("http");
const express = require("express");
const cors = require("cors");

const socketIO = require("socket.io");

const app = express();
app.use(cors());
const port = 2002 || process.env.port;
app.get("/",(req,res)=>{
    res.send("Working Fine")
})


const server = http.createServer(app);
const io = socketIO(server);

io.on("connection",()=>{
    console.log("New user connected")
})



server.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`);
})

