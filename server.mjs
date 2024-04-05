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
let connectedSockets = [];
let ballData = {x:500,y:150,dx:0,dy:0,speed:0}
app.use(express.static(path.join(__dirname,'/onlineshooting.html')))

app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"/onlineshooting.html"))
    // console.log(path.join(__dirname,"/onlineshooting.html"))
})

 





io.on('connection', (socket) => {
    console.log('A user connected',connectedSockets);
    connectedSockets.push({
        id:socket.id,
        x:(Math.random()*1000),
        y:(Math.random()*300),
        rotationalAngle:0,
    });
    socket.on('updateBallPosition', (data) => {
        console.log(data)
        // Broadcast the new ball position to all clients except the sender
        ballData = {
            ...ballData,
            ...data,
        }
        console.log(ballData)
        socket.broadcast.emit('ballPositionUpdated', ballData);
    });
  
    io.emit("newConnections", connectedSockets , ballData);

    socket.on('disconnect', () => {

        // Remove the disconnected socket ID from the array

        connectedSockets = connectedSockets.filter((soc)=>soc.id !== socket.id);

        // Broadcast the updated list after disconnection
        socket.broadcast.emit("disconnectuser", connectedSockets);
    });

    // socket.on('join-room', (room) => {
    //     const {reciver,sender} = room
    //     if (io.sockets.adapter.rooms.get(`${reciver}-${sender}`)) {
    //      socket.join(`${reciver}-${sender}`)
    //     room = `${reciver}-${sender}`

    //     }else{
    //      socket.join(`${sender}-${reciver}`)
    //     room = `${sender}-${reciver}`
            
    //     }
        
    // });
    socket.on("changing",({ballx,bally})=>{
        socket.broadcast.emit("onchangeListen",{
            ballx,
            bally
        })
    })
    socket.on("hit",(hit)=>{
        socket.broadcast.emit("onBallHit","hithofaya")
    })

    socket.on("updateAllState",(state)=>{
        socket.broadcast.emit("clientSideUpdate",state)
        connectedSockets = state
    })
    // ... other event listeners ...
});



server.listen(PORT, ()=>{
    console.log(PORT)
})