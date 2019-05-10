
const express = require('express');
const app =express();
const port=process.env.PORT || 3000;
const server=app.listen(port);

 //public files setup
app.use(express.static('public'));

 
//socket setup
const socket=require('socket.io');
const io=socket(server);



