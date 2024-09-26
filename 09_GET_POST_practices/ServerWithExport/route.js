const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<HTML>');
        res.write('<head><title>Enter the message</title></head>');
        res.write('<body><h1>Form section</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">sumbit</button></form></body>')
        res.write('</HTML>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
       fs.writeFileSync('message.txt', 'trail message');
       res.statusCode = 302;
       res.setHeader('location','/');
       return res.end();
    }
    res.setHeader('content-type','text/HTML');
    res.write('<HTML>');
    res.write('<body><h1>Hello world</h1></body>')
    res.write('</HTML>');
}

module.exports = requestHandler;