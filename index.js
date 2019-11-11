// подключение express
const express = require("express");
const https = require('https')
const http = require('http')
const fs = require('fs');


// создаем объект приложения
const app = express()
let privateKey  = fs.readFileSync('./selfsigned.key', 'utf8');
let certificate = fs.readFileSync('./selfsigned.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};
let httpsServer = https.createServer(credentials, app);

let httpServ = http.createServer(app);

// определяем обработчик для маршрута "/"
app.get('/geoloc', function(request, response){
	response.sendFile(__dirname + '/geoloc.html');

});

app.get("/", function(request, response){

    response.send("<h2>Привет Express!</h2>");
});

// начинаем прослушивать подключения на 3000 порту
httpsServer.listen(3000);
httpServ.listen(8080);
