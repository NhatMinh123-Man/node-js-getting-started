var http = require('http');
var lanthu = 0;
function XuLyWED(req, res) {
    lanthu++;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Sever V3 - Chao moi nguoi!' +
        "<BR> http://127.0.1.1:8000/" +
        "<BR> localhost:8080" +
        "<BR> lan thu -" + lanthu
    );
    console.log("\n\t...lan thu - " + lanthu);
}
http.createServer(XuLyWED).listen(8080);
console.log("Testjs dang Run o Sever !");