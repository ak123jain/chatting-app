import { server , io } from "./app.js";
import dotenv from 'dotenv';
import { app } from "./app.js";
 
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{

    const port = process.env.PORT || 5000;

    server.listen(port, () => {
        console.log(`SERVER RUNNING ON PORT ${port}`);
    });

    io.on("connection", (socket) => {
        console.log("Socket.IO connected:", socket.id);
    });

}).catch((error)=>{
    console.log("Error connecting to DB", error);
    process.exit(1);
});