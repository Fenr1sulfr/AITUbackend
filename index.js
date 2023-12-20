const http = require('http');
const fs = require('fs');
function serveFile(req, fileName, contentType) {
    fs.readFile(__dirname + fileName, (err, data) => {
        if (err) {
            console.error(err);
            req.writeHead(500, {'Content-Type': 'text/plain'});
            req.end('Internal Server Error');
        } else {
            req.writeHead(200, {'Content-Type': contentType});
            req.end(data);
        }
    });
}

function satisfyTeacherRequirement(data){
    serveFile()
    jsonObject={
        id:
    }
}

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            serveFile(res, "/another.html", 'text/html');
            break;
        case "/about":
            serveFile(res, "/hehe.html", 'text/html');
            break;
        case '/img':
            serveFile(res, "/1200x1200bf-60.jpg", 'image/jpg');
            break;
        default:
            serveFile(res, "/home.html", 'text/html');
            break;
    }
}).listen(3000);
