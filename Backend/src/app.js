import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';
import {Server} from 'socket.io';

const app = express();

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
    });

    app.use(cookieParser());

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))

    app.use(express.json({limit : "16kb"}));
    app.use(express.urlencoded({ extended: true , limit : "16kb"}));
    app.use(express.static('public'));

    const socketiomapped = {}

    export const getreceivedsocketid = (userId) =>{
        return socketiomapped[userId]
    }

    // helper function to genearte a socket id for a user so that we can send message to that user using this socket id 

    io.on('connection', (socket) => {
        console.log('a user connected' , socket.id);

         const userId = socket.handshake.query.userId;

         if(userId){
             socketiomapped[userId] = socket.id
         }

         // Handle message sending to a specific user
         socket.on('send-message', (receivedid ,message) => {
            console.log('receivedid', receivedid);

            const socketid = getreceivedsocketid(receivedid);
            if(socketid){
                socket.to(socketid).emit('receive-message', message)
            }
            
         }); 

         socket.on('disconnect', () => {
             console.log('user disconnected');

             if(userId){
                 delete socketiomapped[userId]
             }

             io.emit('user-disconnected', Object.keys(socketiomapped))
         });
        

    
    });

    export { app, server, io };

    
