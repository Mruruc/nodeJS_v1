const express = require('express');
const app=express();
const path= require('path');


const PORT=process.env.PORT || 8080;
const IP='127.0.0.1';

// built-in middleware to handle urlencoded data
// in other words, form data:
// content-type: application/x-www-form-urlencoded.
app.use(express.urlencoded({extended : false}));

// built-in middleware for json
app.use(express.json());

// serve the static files
// app.use(express.static('path'));

// custom middleware 
app.use((request,response,next)=>{
    console.log(`${request.method} ${request.path}`);
    console.log('first custom middleware');
    next();
});

app.get('/',(request,response)=>{
    console.log('second request handler!');
    response.sendFile(path.join(__dirname,'index.html'));
});

app.listen(PORT,IP,()=>{
    console.log(`Server Running On: http://${IP}:${PORT}`);
    console.log(new URL(`http://${IP}:${PORT}`));
});

