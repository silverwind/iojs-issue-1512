var fs = require('fs');

require('https').createServer({
  key:fs.readFileSync('key.pem'),
  cert:fs.readFileSync('cert.pem')
}, function(request, response) {
  fs.createReadStream('file').pipe(response);
}).listen(443);
