var page     = require("page");
var template = require("./template");//invoco el template

page("/", function(contexto, next){
	var main = document.getElementById("main-container");
	main.innerHTML = "";
	main.appendChild(template);
});
page();