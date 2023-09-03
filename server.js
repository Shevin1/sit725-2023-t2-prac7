var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.port || 3000;
require('./dbConnect');
let router = require('./routes/router');

//const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', 'public/views');
app.set('view engine', 'ejs');

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

let collection;

app.use('/api/dog', router);
app.use('/', router);


http.listen(port, () => {
    console.log("App listening to : ", port)
})


