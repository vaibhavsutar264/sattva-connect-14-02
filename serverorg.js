const https = require('https');
const next = require('next');
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const http = require('http');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsPort = 443;
const httpPort = 80;
var credentials = {
  key: fs.readFileSync('/etc/apache2/ssl/sattvaconnect.key'),
  cert: fs.readFileSync('/etc/apache2/ssl/655f9d8553614987.crt'),
  ca: [fs.readFileSync('/etc/apache2/ssl/gd_bundle-g2-g1.crt')],
};

app.prepare().then(() => {
  const server = express();

  var corsOptions = {
    origin: 'https://sattvaconnect.com:9999',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

  server.use(cors(corsOptions));

  server.get('/app', (req, res) => {
    res.writeHead(301, { Location: '/app/index.html' });
    return res.end();
  });

  server.get('/iosapp', (req, res) => {
    res.writeHead(301, { Location: '/iosapp/index.html' });
    return res.end();
  });

  server.get('/roadtodharma/course_details/*', (req, res) => {
    const fullUrl = req.url;
    const url = fullUrl.replace('/roadtodharma/course_details', '');
    const newUrl = '/course_details' + url;
    res.writeHead(301, { Location: newUrl });
    return res.end();
  });

  server.get('/roadtodharma*', (req, res) => {
    res.writeHead(301, { Location: '/course_details/MQ==' });
    return res.end();
  });

  server.get('*', (req, res) => handle(req, res));

  https.createServer(credentials, server).listen(httpsPort, (err) => {
    if (err) throw err;
    console.log(`> HTTPS Ready on https://localhost:${httpsPort}`);
  });
});

http
  .createServer(function (req, res) {
    res.writeHead(301, {
      Location: 'https://' + req.headers['host'] + req.url,
    });
    res.end();
  })
  .listen(httpPort, (err) => {
    if (err) throw err;
    console.log(`> HTTP Ready on http://localhost:${httpPort}`);
  });
