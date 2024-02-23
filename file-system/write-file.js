
const fs = require('fs');
const path = require('path');


/*
fs.writeFile(path.join(__dirname,'files','write.txt'),'Hello Writing a file with NodeJs.',
    (error)=>{
        if(error){
            throw error;
        }
        console.log('Write Completed.');
    }
);
*/
fs.appendFile(path.join(__dirname,'files','write.txt'),'\n Hello You Are Doing Well!',
      (error)=>{
        if(error){
            throw error;
        }
        console.log('Successfully Appended!');
      }
);