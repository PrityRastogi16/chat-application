const http = require("http");
const express = require("express");
const cors = require("cors");

const socketIO = require("socket.io");

const app = express();
app.use(cors());
const users =[{}];
const port = 2002 || process.env.port;
app.get("/",(req,res)=>{
    res.send("Working Fine")
})


const server = http.createServer(app);
const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("New user connected");

    socket.on("joined",({user})=>{
        users[socket.id] = user;
    console.log(`${user} has joined`)
    socket.broadcast.emit('userJoined',{user:"Admin", message:`${users[socket.id]} has joined`})
    socket.emit('welcome', {user:"Admin", message:`Welcome to the chat, ${users[socket.id]}`})
    })
    
    socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:"Admin", message:`${users[socket.id]} has left the chat!`})
        console.log(`User Left!`)
    })
})



server.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`);
});
