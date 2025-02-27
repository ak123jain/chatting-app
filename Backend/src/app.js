import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin :  process.env.CORS_ORIGIN, 
    credentials : true
}))

 
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cookieParser())


    import userRouter from './routes/user.router.js';
    import courceRouter from './routes/cource.router.js';
    import courceprogressRouter from './routes/courceprogress.router.js';
    import orderRouter from './routes/order.router.js';

    app.use('/users', userRouter);
    // http://localhost:8000/user/ user routes ka andar jo method ha vo

    app.use('/cources',  courceRouter);
    app.use('/courceprogress', courceprogressRouter);
    app.use('/orders', orderRouter);    

    export {  app };