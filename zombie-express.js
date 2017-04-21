var assert = require("assert"),
	path = require("path"),
	Browser = require("zombie"),
	express = require('express');

Browser.localhost('127.0.0.1', 8081);
var browser = new Browser();
var server = express().use('/', express.static(__dirname)).listen(8081, '127.0.0.1');

browser.visit("temp/index.html").then(function(){
	console.log('LOADED');

	browser.assert.success();
	browser.assert.element('.demo_wrapper');
	browser.assert.element('.demo');

	var doc = browser.window.document;
	var tabs = doc.getElementsByClassName("tab");

	assert.equal(tabs.length, 3, "there are 3 tabs");

	console.log('DONE!');

	server.close();
}).catch(function(e){
	server.close();
	console.log(e);
});
