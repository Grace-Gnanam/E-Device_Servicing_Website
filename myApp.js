const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
if(req.url==='/'){
res.writeHead(200,{"Content-Type": "text/html"});
fs.createReadStream('signup.html').pipe(res);
}
else if(req.url ==='/signup' && req.method == 'POST'){
var rawData = '';
req.on('data',function(data){
rawData += data;
})
req.on('end',function(){
var inputdata = new URLSearchParams(rawData);
res.writeHead(200,{"Content-Type": "text/html"});
res.write('User Name: ' +inputdata.get('username') + '<br>');
res.write('User Email: ' +inputdata.get('useremail') + '<br>');
res.end();
});
}
});
server.listen(2000,function(){
console.log('listening at 2000')
});