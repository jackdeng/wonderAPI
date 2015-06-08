var Xray = require("x-ray");
var x = Xray();
var comb = {};

var brush = function() {
    console.log("starting to scrape for data");
    var url = "http://sf.funcheap.com/free-events/";
    var scope = "body";
    var selector = ["a"];
    x(url, scope)(function(err, data) {
        console.log("coming back");
        console.log(data);
    });
}
var test = function() {
    console.log("starting to scrape for data");
    var url = "https://news.ycombinator.com/";
    var scope = "body";
    var selector = [".title"];
    x(url, selector)(function(err, data) {
        console.log("coming back");
        console.log(data);
    });
}

comb.brush = brush;
comb.test = test;
module.exports = comb;