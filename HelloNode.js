var http = require('http');
var url = require('url');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var dates = q.year + " " + q.name;
	res.end(dates);
}).listen('8070');