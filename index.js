let http = require('http');
let path = require('path');
let fs = require('fs');

let server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'Public',
        req.url == '/' ? 'index.html' : req.url
    );
    let extname = path.extname(filePath);
    let contentType;

    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.webpg':
            contentType = 'image/webpg';
            break;
        case '.svg':
            contentType = 'image/svg';
            break;
        default:
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(
                        __dirname,
                        'public',
                        '404.html'
                    ),
                    () => {});
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(content, 'utf8');
            } else {
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content, 'utf8');
        }
    });
});

let PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log('Server active on port ' + PORT);
});