// const _ = require('underscore');
// var result = _.contains([1,2,3], 1);
// console.log(result);


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// const Logger = require('./logger');
// const logger = new Logger();
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// const EventEmitter = require('events');
// const http = require('http');
// const emitter = new EventEmitter();

// var files = fs.readdirSync('./');

// var totalMem = os.totalmem();
// var freeMem = os.freemem();
// var userName = os.userInfo();
// var pathObj = path.parse(__filename);

// logger.logMessage('This is the logging message');
// logger('This is the logging message');

// console.log('Total Memory: ' + totalMem);
// console.log(`Total Free Memory: ${freeMem}`);
// console.log(`UserName: ${userName.username}`);


// console.log(files);

// var filesASync = fs.readdir('./', function(err,files){
//     if(err) console.log(`Error: ${err}`);
//     else console.log(`Result: ${files}`);
// })


// Register a listner
// emitter.on('messageLogged', function(eventArg){
//     console.log('Listner called! ', eventArg);
// });

// Register a listner using arrow function
// logger.on('messageLogged', (eventArg) => {
//     console.log('Arrow function Listner called! ', eventArg);
// });

// logger.log('message');

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.write('Hellow Amii! ');
//         res.end();
//     }

//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3,4,5]));
//         res.end();
//     }
// });

// server.on('connection', (socket) => {
//     console.log('New Connection...');
// })

// server.listen(3000);

// console.log('Listening on port 3000...');