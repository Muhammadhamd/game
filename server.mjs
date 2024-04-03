import express from "express"
import bodyParser from "body-parser"
import path from "path"
import {Server} from "socket.io"
import http from "http"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import { Console } from "console"
const __dirname = path.resolve()
const app = express()
const PORT = 4300
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser())
const server = http.createServer(app)
const io = new Server(server)
const connectedSockets = [];
app.use(express.static(path.join(__dirname,'/onlineshooting.html')))

app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"/onlineshooting.html"))
    console.log(path.join(__dirname,"/onlineshooting.html"))
})

 





io.on('connection', (socket) => {
    console.log('A user connected',socket.id);
    connectedSockets.push(socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected');

        // Remove the disconnected socket ID from the array
        const index = connectedSockets.indexOf(socket.id);
        if (index !== -1) {
            connectedSockets.splice(index, 1);
        }
    });

    socket.on('join-room', (room) => {
        const {reciver,sender} = room
        if (io.sockets.adapter.rooms.get(`${reciver}-${sender}`)) {
         socket.join(`${reciver}-${sender}`)
        room = `${reciver}-${sender}`

        }else{
         socket.join(`${sender}-${reciver}`)
        room = `${sender}-${reciver}`
            
        }
        console.log(`Socket ${socket.id} joined room ${room}`);
        
    });

    // ... other event listeners ...
});


server.listen(PORT, ()=>{
    console.log(PORT)
})