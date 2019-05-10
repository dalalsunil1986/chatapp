
const express = require('express');
const app =express();
const port=process.env.PORT || 3000;
const server=app.listen(port);

//socket setup
const socket=require('socket.io');
const io=socket(server);



