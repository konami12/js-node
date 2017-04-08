var page     = require("page");
var template = require("./template");//invoco el template
var empty    = require("empty-element");
page("/signup", function(contexto, next){
	var main = document.getElementById("main-container");
	empty(main).appendChild(template);
});
page();