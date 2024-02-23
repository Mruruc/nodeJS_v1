const express= require('express');
const app=express();
const path=require('path');

const PORT=process.env.PORT || 3500;


app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
});
app.get('/*',(request,response)=>{
    
    response.status(404).sendFile(path.join(__dirname,'notFound.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server Running On PORT ${PORT}`);
});