const {v4: uuid} =require('uuid');
const fs =require('fs');
const fsPromises =require('fs').promises;
const path =require('path');

function dateFormat(){
    const date=new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const log=async (message,fileName)=>{
    const date= dateFormat();
    const logItem=`${date}\t${uuid()}\t${message}\n`;
    // Log to console
    console.log(logItem);
    try{ 
        await fsPromises.appendFile(path.join('logs',fileName),logItem);
    }catch(error){
        console.error(error.message);
    }
}

module.exports =log;