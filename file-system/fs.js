const fs = require('fs');
const path = require('path');


console.log(__dirname);
console.log(__filename);

// Make Directory If Exists!

/*

if(!fs.existsSync('./dir')){
    fs.mkdir('./dir',(error)=>{
        if(error){
            console.error(error.message);
            return;
        }
        console.log('Directory Created!');
    });
}else{
    console.log('Directory is Already Exists!');
}

*/

// Remove Directory

if(fs.existsSync('./dir')){
    fs.rmdir('./dir',(error)=>{
        if(error){
            console.error(error.message);
            return;
        }
        console.log('Directory Deleted!');
    });
}else{
    console.log('Directory is NOT Exists!');
}


// Renaming A File.
fs.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','test21.txt'),
         (err)=>{
            if(err){
               console.log(err.message);
               return;
            }
            console.log('Successfully Renamed.')
         }
);




// Delete A File.
fs.unlink(path.join(__dirname,'files','test21.txt'),
         (err)=>{
            if(err){
                console.error(err.message);
                return;
            }
            console.log('Successfully Deleted.')
         }
);
