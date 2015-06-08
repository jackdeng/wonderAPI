var restify = require('restify');
var comb = require("../lib/comb");

var server = restify.createServer({
    name: 'wonderAPI',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get("/echo/:name", function (req, res, next) {
    res.send(req.params);
    return next();
});


server.get("/scrape/test", function(req, res, next) {
    comb.test();
    res.send({
        "result": "none right now"
    });
});

server.get("/scrape", function(req, res, next) {
    comb.brush();
    res.send({
        "result": "none right now"
    });
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
