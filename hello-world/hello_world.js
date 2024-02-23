import http from 'node:http';


const hostName='127.0.0.1';
const port=8080;

function callBack(request,response){
    console.log(request.in);
    console.log(`Request Details: ${request}`);
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');
    response.end('<h1>Hello World\n</h1>');
}
const server=http.createServer(callBack);

server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
    const url=new URL(`http://${hostName}:${port}`);
    console.log(url);
});