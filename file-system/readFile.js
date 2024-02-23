const fs = require('fs');
const path = require('path');


/*

fs.readFile('file-system/files/example.txt','utf8',(error,data)=>{
    if(error){
        console.log(error.message);
    }
    console.log(data);
});

*/

// console.log(__dirname);
// console.log(__filename);



fs.readFile(path.join(__dirname,'files','read.txt'),'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    console.log(data);
});

