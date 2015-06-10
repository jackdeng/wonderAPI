var Xray = require("x-ray");
var phantom = require('x-ray-phantom');
var x = Xray().driver(phantom());
var comb = {};

var brush = function(date) {
    // so this is a hack; sf.funcheap has a rest api of the form
    // http://sf.funcheap.com/<year>/<month>/<date>
    var now = new Date();
    var testDate = {
        "year": now.getFullYear(),
        "month": now.getMonth() + 1, // month is 0 - 11
        "day": now.getDate() //date is 1 - 31... lol.
    }
    date = date || testDate;

    // construct the url for the date.
    var base = "http://sf.funcheap.com";
    var urlParts = [];
    urlParts.push(base, date.year, date.month, date.day);
    var url = urlParts.join("/");

    console.log("starting to scrape for data: ", url);
    var scope = "body";
    var selector = [".tanbox.left"];
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