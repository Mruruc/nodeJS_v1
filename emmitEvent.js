const log=require('./logEvents/logEvents');


const EventEmitter= require('events');

class Emitter extends EventEmitter{};


const emitter=new Emitter();

// add listener for the log event

emitter.on('log',(message)=>log(message,'test.log'));


setTimeout(()=>{
    emitter.emit('log','Log event emitted!');
},2000);