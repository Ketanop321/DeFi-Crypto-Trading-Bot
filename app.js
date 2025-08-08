const express = require('express')
const cors = require('cors');


const userRouter = require('./Api/Routers/userRouter');
const router = require('./Api/Routers/userRouter');



//MIDDLEWARE
 const app = express();
 app.use(express.json({ limit: '100kb' }));


 app.use(cors())
 app.options('*', cors());//global cors


 //ROUTERS

   app.use('/api/v1/user', userRouter);
   //whenever any request comes to /api/v1/user, it will be handled by userRouter

   module.exports = app;