import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { getUsers, userJoin, userLeave } from './util/user'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {cors: {origin: "http://localhost:3000"}})

io.on("connection", (socket) => {
    socket.join("myChat");

    socket.on("handle-connection", (username: string) => {
        if(!userJoin(socket.id, username)) {
            socket.emit("username-taken")
        } else {
            socket.emit("username-submitted-successfully");
            io.to("myChat").emit("get-connected-users", getUsers())
        }
    })

    socket.on("message", (message: {message: string; username: string}) => {
        socket.broadcast.to("myChat").emit("recieve-message", message)
    })

    socket.on("disconnect", () => {
        userLeave(socket.id)
    })
})

server.listen(5000, () => console.log("Server started on port 5000"))
