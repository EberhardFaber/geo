var myGeo = navigator.geolocation;
myGeo.getCurrentPosition(function(position) { ... });
var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    port = 8000;

var options = {
    key: fs.readFileSync('./ssl/privatekey.pem'),
    cert: fs.readFileSync('./ssl/certificate.pem'),
};

var app = express();

var server = http.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});








    // определяем геолокацию
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

function displayLocationInfo(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${ lng } | latitude: ${ lat }`);
}
 
